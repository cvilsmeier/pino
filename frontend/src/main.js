
let logElement = document.getElementById("log");

// initialize audio
let audio = new Audio();
audio.addEventListener("error", (err) => {
    logElement.innerHTML += "audio: error '" + err.message + "'<br>";
})
audio.addEventListener("canplaythrough", () => {
    logElement.innerHTML += "audio: canplaythrough<br>";
})

// On linux, we fetch raw audio data in one large blob,
// see also https://github.com/wailsapp/wails/issues/2090
fetch("alert.mp3")
    .then(response => response.blob())
    .then(data => {
        logElement.innerHTML += "audio: loaded data<br>"
        console.log(data)
        let audioUrl = URL.createObjectURL(data)
        audio.src = audioUrl
    }).catch(err => {
        logElement.innerHTML += "audio: load error " + err.message + "<br>"
    })


window.onPlaySound = function () {
    // stop and rewind the audio in case the user clicks very fast and the audio is still playing
    audio.pause()
    audio.currentTime = 0
    // start the audio
    audio.play().then(() => {
        logElement.innerHTML += "audio: play ok<br>"
    }).catch((err) => {
        logElement.innerHTML += "audio: play error: " + err.message + "<br>"
    });
};

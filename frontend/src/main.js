import './style.css';
import './app.css';

import logo from './assets/images/logo-universal.png';
import {Greet} from '../wailsjs/go/main/App';
import alertMp3 from './assets/sounds/alert.mp3';

document.querySelector('#app').innerHTML = `
    <img id="logo" class="logo">
    <div class="result" id="result">Please enter your name below 👇</div>
    <div class="input-box" id="input">
        <input class="input" id="name" type="text" autocomplete="off" />
        <button class="btn" onclick="greet()">Greet</button>
    </div>
    <div class="result" id="audioResult"></div>
`;
document.getElementById('logo').src = logo;

let nameElement = document.getElementById("name");
nameElement.focus();
let resultElement = document.getElementById("result");

// initialize audio - this will work in 'wails dev' but not in 'wails build'
let audioResultElement = document.getElementById("audioResult");
let audio = new Audio(alertMp3);
audio.addEventListener("error", (err) =>{
    audioResultElement.innerHTML = "audio: error '" + err.message + "'";
})
audio.addEventListener("canplaythrough", () =>{
    audioResultElement.innerHTML = "audio: canplaythrough";
})

// Setup the greet function
window.greet = function () {
    // Get name
    let name = nameElement.value;

    // Check if the input is empty
    if (name === "") return;

    // play audio - this will work in 'wails dev' but not in 'wails build'
    audio.play().then(() => {
        audioResultElement.innerHTML = "audio: play ok";
    }).catch( (err) => {
        audioResultElement.innerHTML = "audio: play error: " + err.message;
    });

    // Call App.Greet(name)
    try {
        Greet(name)
            .then((result) => {
                // Update result with data back from App.Greet()
                resultElement.innerText = result;
            })
            .catch((err) => {
                console.error(err);
            });
    } catch (err) {
        console.error(err);
    }
};

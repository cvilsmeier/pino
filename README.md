# README

This repository demonstrates how a wails app (https://wails.io)
can play sound. It works on Linux with

    $ wails dev

but does not work with

    $ wails build


## Project Setup

The wails project was created using the command

    $ wails init -n pino

Then I added a mp3 file `frontend/src/assets/sounds/alert.mp3` and 
added audio code to `frontend/src/main.js`. Everytime the "greet"
button is pressed, the sound file should start playing.


## Wails Doctor Output

    $ wails doctor
    Wails CLI v2.2.0

    Scanning system - Please wait (this may take a long time)...Done.

    System
    ------
    OS:		Debian GNU/Linux
    Version: 	11
    ID:		debian
    Go Version:	go1.19.3
    Platform:	linux
    Architecture:	amd64

    Wails
    ------
    Version: 		v2.2.0
    Package Manager: 	apt

    Dependency	Package Name		Status		Version
    ----------	------------		------		-------
    *docker 	docker.io 		Available 	20.10.5+dfsg1-1+deb11u2
    gcc 		build-essential 	Installed 	12.9
    libgtk-3 	libgtk-3-dev 		Installed 	3.24.24-4+deb11u2
    libwebkit 	libwebkit2gtk-4.0-dev 	Installed 	2.38.2-1~deb11u1
    npm 		npm 			Installed 	8.19.2
    *nsis 		nsis 			Available 	3.06.1-1
    pkg-config 	pkg-config 		Installed 	0.29.2

    * - Optional Dependency

    Diagnosis
    ---------
    Your system is ready for Wails development!
    Optional package(s) installation details: 
    - docker: sudo apt install docker.io
    - nsis: sudo apt install nsis



    If Wails is useful to you or your company, please consider sponsoring the project:
    https://github.com/sponsors/leaanthony


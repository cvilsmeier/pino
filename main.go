package main

import (
	"embed"
	"log"
	"net/http"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

//go:embed alert.mp3
var alertMp3 []byte

func main() {
	// Create an instance of the app structure
	app := NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:  "pino",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets:  assets,
			Handler: http.HandlerFunc(handle),
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}

func handle(w http.ResponseWriter, req *http.Request) {
	log.Printf("handle %s %s", req.Method, req.URL.Path)
	if req.URL.Path == "/alert.mp3" {
		_, err := w.Write(alertMp3)
		if err != nil {
			log.Printf("handle: cannot write alertMp3: %s", err)
		}
	}
}

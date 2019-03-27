package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	//"net/http"
)

func main() {
	// Set the router as the default one shipped with Gin
	router := gin.Default()
	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./donatefrontend/build/", true)))

	router.Run(":3001")
}

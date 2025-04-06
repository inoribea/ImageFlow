package handlers

import (
	"net/http"
	"os"

	"github.com/Yuri-NagaSaki/ImageFlow/config"
	"github.com/Yuri-NagaSaki/ImageFlow/utils"
)

func RandomImage(cfg *config.Config) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		storageType := os.Getenv("STORAGE_TYPE")

		if storageType == "s3" {
			RandomImageHandler(utils.S3Client)(w, r)
		} else {
			LocalRandomImageHandler()(w, r)
		}
	}
}

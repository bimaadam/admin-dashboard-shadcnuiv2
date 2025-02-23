package main

import (
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() {
	var err error
	DB, err = gorm.Open(sqlite.Open("database/Produk.sql"),
	&gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect Database:",
	err)
}
log.Println("Database connected")
}
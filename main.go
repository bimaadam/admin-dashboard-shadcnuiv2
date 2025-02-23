package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	// konek ke database
	db, err := sql.Open("mysql", "root:@tcp(127.0.0.1:3306)/data")
	if err != nil {
		log.Fatal("Gagal Konek Ke database:", err)
	}
	defer db.Close()
	fmt.Println("Berhasil konek ke db")

	// ngambil data
	rows, err := db.Query("SELECT Nama, Kelas FROM `data-prib`")
	if err != nil {
		log.Fatal("Gagal Ambil data:", err)
	}
	defer rows.Close()

	// baca setiap baris hasil query
	for rows.Next() {
		var Nama string
		var Kelas string // sesuaikan tipe data Kelas dengan yang ada di database
		if err := rows.Scan(&Nama, &Kelas); err != nil {
			log.Fatal(err)
		}
		// tampil hasil dengan fmt.Fprintf ke os.Stdout
		fmt.Fprintf(os.Stdout, "Nama: %s, Kelas: %s\n", Nama, Kelas)
	}

	// cek jika ada error saat iterasi baris
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
}

package config

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB
var err error

func InitDb() {
	conf := GetConfig()

	db, err = sql.Open("mysql", conf.DB_USERNAME+":"+conf.DB_PASSWORD+"@/"+conf.DB_NAME)
	if err != nil {
		panic("connectionString error..")
	}

	err = db.Ping()
	if err != nil {
		panic("DSN Invalid")
	}
}

func CreateCon() *sql.DB {
	return db
}

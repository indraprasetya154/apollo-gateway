package config

import (
	"database/sql"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/spf13/viper"
)

func CreateCon() *sql.DB {
	db, err := sql.Open(viper.GetString("DB_DRIVER"), viper.GetString("DB_USERNAME")+":"+viper.GetString("DB_PASSWORD")+"@tcp("+viper.GetString("DB_HOST")+":"+viper.GetString("DB_PORT")+")/"+viper.GetString("DB_DATABASE"))
	if err != nil {
		panic(err)
	}

	db.SetConnMaxIdleTime(5)
	db.SetMaxOpenConns(20)
	db.SetConnMaxLifetime(60 * time.Minute)
	db.SetConnMaxIdleTime(10 * time.Minute)

	return db
}

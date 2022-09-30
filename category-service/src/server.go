package main

import (
	"github.com/indraprasetya154/apollo-gateway/category-service/src/config"
	"github.com/indraprasetya154/apollo-gateway/category-service/src/routes"
)

func main() {
	config.GetConfig()
	e := routes.Init()

	e.Logger.Fatal(e.Start(":1323"))
}

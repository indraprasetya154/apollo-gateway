package routes

import (
	"github.com/indraprasetya154/apollo-gateway/category-service/src/controllers"

	"github.com/labstack/echo/v4"
)

func Init() *echo.Echo {
	e := echo.New()
	e.GET("/category", controllers.FetchAllCategory)

	return e
}

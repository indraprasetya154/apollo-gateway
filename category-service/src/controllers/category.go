package controllers

import (
	"net/http"

	"github.com/indraprasetya154/apollo-gateway/category-service/src/models"

	"github.com/labstack/echo/v4"
)

func FetchAllCategory(c echo.Context) error {
	result, err := models.FetchAllCategory()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}
	return c.JSON(http.StatusOK, result)
}

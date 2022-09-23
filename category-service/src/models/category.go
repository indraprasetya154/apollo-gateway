package models

import (
	"github.com/indraprasetya154/apollo-gateway/category-service/src/config"
)

type Category struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

func FetchAllCategory() (Response, error) {
	var obj Category
	var arrObj []Category
	var res Response

	con := config.CreateCon()

	rows, err := con.Query("SELECT * FROM categories")
	if err != nil {
		return res, err
	}
	defer rows.Close()

	for rows.Next() {
		err = rows.Scan(&obj.Id, &obj.Name)
		if err != nil {
			return res, err
		}

		arrObj = append(arrObj, obj)
	}

	res.Message = "Success"
	res.Data = arrObj

	return res, nil
}

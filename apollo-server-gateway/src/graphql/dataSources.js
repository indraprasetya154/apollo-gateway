import { RESTDataSource } from "apollo-datasource-rest";

class Category extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:1323/";
  }

  async getCategories(gender = "all") {
    const category = await this.get(`/category`);

    return category.data;
  }
}

export default Category

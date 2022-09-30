import { RESTDataSource } from "apollo-datasource-rest";

export class CategoryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:1323/";
  }

  async getCategories() {
    const category = await this.get(`/category`);
    return category.data;
  }
}
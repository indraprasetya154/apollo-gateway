import { Sequelize } from "sequelize";

// create connection
const db = new Sequelize('learn_apollo_server', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
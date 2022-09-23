import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Categories from "./categories.js";
import Abilities from "./abilities.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Heroes = db.define('heroes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  health: {
    type: DataTypes.INTEGER,
  },
  mana: {
    type: DataTypes.INTEGER,
  }
},{
  freezeTableName: true,
});

Heroes.belongsTo(Categories, { foreignKey: 'categoryId' })
Heroes.hasMany(Abilities, { foreignKey: 'heroId' })

export default Heroes;
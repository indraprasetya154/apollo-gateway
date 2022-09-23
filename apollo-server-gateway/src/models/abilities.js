import { Sequelize } from "sequelize";
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Abilities = db.define('abilities', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  heroId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ability: {
    type: DataTypes.STRING,
  },
},{
  freezeTableName: true,
  timestamps: false
});


export default Abilities;
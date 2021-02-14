import Sequelize, { Model, Optional } from "sequelize";
import Database from "../db";
import { IAccount } from ".";

interface AccountCreateAttributes extends Optional<IAccount, "id"> {}
export interface AccountModel
  extends Model<AccountCreateAttributes>,
    IAccount {}

export default Database.define<AccountModel>("account", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.SMALLINT.UNSIGNED,
    allowNull: false,
    defaultValue: 100,
  },
  domain: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

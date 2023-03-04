import { Sequelize } from "sequelize-typescript";
import { Task } from "../models/task";
import { Users } from '../models/users';

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "test",
  logging: false,
  models: [Task,Users],
});

export default connection;

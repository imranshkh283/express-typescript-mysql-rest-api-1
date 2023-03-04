import { RequestHandler } from "express";

import { Task } from "../models/task";

export const createToDo: RequestHandler = async (req, res, next) => {
  var todos = await Task.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Todo created successfully", data: todos });
};

export const deleteToDo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedTodo: Task | null = await Task.findByPk(id);

  await Task.destroy({ where: { id } });

  return res
    .status(200)
    .json({ message: "Todo deleted successfully", data: deletedTodo });
};

export const getAllToDo: RequestHandler = async (req, res, next) => {
  const allTodos: Task[] = await Task.findAll();

  return res
    .status(200)
    .json({ message: "Todo fetched successfully", data: allTodos });
};

export const getTodoById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const todos: Task | null = await Task.findByPk(id);
  return res
    .status(200)
    .json({ message: "Todo fetched successfully", data: todos });
};

export const updateToDo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Task.update({ ...req.body }, { where: { id } });
  const updatedTodos: Task | null = await Task.findByPk(id);
  return res
    .status(200)
    .json({ message: "Todo updated successfully", data: updatedTodos });
};

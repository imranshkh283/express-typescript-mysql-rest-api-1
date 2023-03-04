import e, { RequestHandler } from "express";

import { Users } from '../models/users';

export const checkapi: RequestHandler = (req, res, next) => {
    res.status(200).json('User Api')
}

export const createUser:RequestHandler = async (req, res, next) => {

  const { email} = req.body;

  const user = await  Users.findOne({
    where:{ email:email },
    raw : true,
    rejectOnEmpty:true
  })

  if(user) return res.json({ message: `The email already exist .` })
  let insert = await Users.create({ ...req.body });
  return res.status(200).json({ message: "user created successfully", data: insert });

};


export const updateUser: RequestHandler = async (req, res, next) => {

  const id  = req.params.id;
  await Users.update({ firstName: req.body.firstName }, { where: { id } });
  const updateUser: Users | null = await Users.findByPk(id);

  return res
    .status(200)
    .json({ message: "User updated successfully", data: updateUser });
}
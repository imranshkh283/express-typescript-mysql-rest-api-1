import { RequestHandler } from "express";
import { Task } from "../models/task";
import { Activity } from '../models/activity';

export const create: RequestHandler = async (req, res, next) => {

    try {
        if(!req.body.id){
           res.status(404).json({ data : "empty" }) 
        }
        const data = await Task.findOne({
            where: {id: req.body.id},
            raw: true,
            rejectOnEmpty:true
        })
        if(data === null){
            res.status(400).send({ message : 'Task not exists'})
        } else {
            const task = {
                userId: data.id,
                taskId: data.userId,
                createdBy: data.createdBy,
                title: req.body.title,
                description: req.body.description,
                status: 0,
                hour: req.body.hour,
                plannedStartDate: req.body.plannedStartDate,
                plannedEndDate: req.body.plannedEndDate,
                actualStartDate: req.body.actualStartDate,
                actualEndDate: req.body.actualEndDate,
            }
            const activity = Activity.create(task);
            res.status(200).json({message: "Activity created successfully", data: activity})
        }
    } catch (error) {
        res.send(error)
    }
}
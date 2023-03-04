import { Table, Model, Column, DataType, HasMany, ForeignKey } from "sequelize-typescript";
import { Users } from "./users";
import { Task } from './task';

@Table({
    timestamps: true,
    tableName:'activity'
})

export class Activity extends Model {

    @ForeignKey(() => Users)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    @ForeignKey(() => Task)
    @Column({
        type:DataType.INTEGER,
        allowNull:false,
    })
    taskId!:number

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
      })
    createdBy!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
    title!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
    description!: string;

    @Column({
        type: DataType.SMALLINT,
        allowNull: false,
      })
    status!: number;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
      })
    hour!: number;
    
    @Column({
      type: DataType.DATE,
      allowNull: false,
    })
    plannedStartDate!: number;

    @Column({
      type: DataType.DATE,
      allowNull: false,
    })
    plannedEndDate!: number;

    @Column({
      type: DataType.DATE,
      allowNull: false,
    })
    actualStartDate!: number;

    @Column({
      type: DataType.DATE,
      allowNull: false,
    })
    actualEndDate!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
      })
    createdAt!: number;
    

}
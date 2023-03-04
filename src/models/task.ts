import { Table, Model, Column, DataType, HasMany, ForeignKey } from "sequelize-typescript";
import { Users } from './users';
@Table({
  timestamps: true,
  tableName: "task",
})

export class Task extends Model {
  
  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;
  
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
  createdAt!: number;
}


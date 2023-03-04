import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
    timestamps:true,
    tableName: 'users',
})
export class Users extends Model {

    @Column({
        type: DataType.SMALLINT,
        allowNull: false,
    })
    roleId!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastName!: string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    username!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    password!: string;

    @Column({
        type: DataType.BIGINT,
        allowNull:false,
    })
    mobile!: number;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    email!: string;

}
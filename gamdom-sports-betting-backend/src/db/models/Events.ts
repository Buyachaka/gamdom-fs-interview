import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db';

export class Event extends Model {
    public event_id!: number;
    public event_name!: string;
    public homeOdds!: number;
    public drawOdds!: number;
    public awayOdds!: number;

}

Event.init(
    {
        event_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        event_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        homeOdds: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        drawOdds: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        awayOdds: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'events',
        timestamps: false,
    }
);

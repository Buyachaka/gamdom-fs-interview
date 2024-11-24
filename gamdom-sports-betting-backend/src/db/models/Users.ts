import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db';
import bcrypt from 'bcryptjs';

export class User extends Model {
    public user_id!: number;
    public username!: string;
    public password!: string;
}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        hooks: {
            beforeCreate: async (user: User) => {
                if (user.password) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt);
                }
            },
        },
        tableName: 'Users',
        timestamps: false,
    }
);

export default User;


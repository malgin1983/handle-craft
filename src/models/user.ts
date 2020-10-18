import { Sequelize, DataTypes, Model} from 'sequelize'
import sequelize from "../DBconnection";

const User = sequelize.define('Auth', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    name:  DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default User
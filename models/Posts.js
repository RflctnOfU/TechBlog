const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model { }

Posts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        time: {
            type: DataTypes.DATEONLY,
            // get() {
            //     return `${new Date.getDate()}-${new Date.getMonth()}-${new Date.getFullYear()}`
            // }

        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts',
    }
);

module.exports = Posts;
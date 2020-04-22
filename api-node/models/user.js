const db = require("../config/database");
const Sequelize = require("sequelize");

const User = db.define("user", {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.ENUM,
        allowNull: false,
    },
    profile_image: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    bio: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    followers_number: {
        type: Sequelize.INTEGER,

    }
}, {
    //timestamps:false,
    underscored: true,
    //   freezeTableName: true,
    //   tableName: "users",
});

module.exports = User;

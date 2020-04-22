const db = require("../config/database");
const Sequelize = require("sequelize");

const SamplePost = db.define("sample_post", {
    content: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    datetime: {
        type: Sequelize.DATE,
        allowNull: false,
    }
}, {
    //timestamps:false,
    underscored: true,
    //   freezeTableName: true,
});

module.exports = SamplePost;

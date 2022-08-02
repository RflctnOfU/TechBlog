const sequelize = require('../config/connection');
const { User, Posts, Comment } = require('../models');

const userComments = require('./userComments.json');
const userPosts = require('./userPosts.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Posts.bulkCreate(userPosts, {
        returning: true,
    });

    await Comment.bulkCreate(userComments, {
        returning: true,
    });

    process.exit(0);
};

seedDatabase();
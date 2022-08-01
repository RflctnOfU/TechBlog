const sequelize = require('../config/connection');
const { User, Posts } = require('../models');

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

    process.exit(0);
};

seedDatabase();
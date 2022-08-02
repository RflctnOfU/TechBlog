const router = require('express').Router();
const { User, Posts, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard', withAuth, (req, res) => {
    try {
        const postData = await Posts.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'name'],
                },
            ],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
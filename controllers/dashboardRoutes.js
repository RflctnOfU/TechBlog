const router = require('express').Router();
const { User, Posts, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    // if (!res.session.logged_in) {
    //     document.location.replace('login');
    // }

    try {
        const postData = await Posts.findAll({
            where: {
                user_id: req.session.user_id,
            },
            attributes: [
                'id',
                'title',
                'text',
                'created_at'
            ],
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'text', 'user_id', 'posts_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['name']
                    }
                },
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
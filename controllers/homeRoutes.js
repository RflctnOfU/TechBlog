const router = require('express').Router();
const { User, Posts, Comment } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
        });

        const users = userData.map((user) => user.get({ plain: true }));

        const postData = await Posts.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'name'],
                },
                {
                    model: Comment,
                    attributes: ['id', 'text', 'user_id', 'posts_id', 'created_at'],
                    include: [
                        {
                            model: User,
                            attributes: ['id', 'name']
                        }
                    ]
                }

            ],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            users,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
);

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Posts.findByPk(req.params.id, {
            attributes: ['id', 'title', 'text', 'created_at'],
            include: [{
                model: User,
                attributes: ['name']
            },
            {
                model: Comment,
                attributes: ['id', 'text', 'user_id', 'posts_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['name']
                }
            }]
        })
        if (!postData) {
            res.status(404).json({ message: 'not found' });
            return;
        } const post = postData.get({ plain: true });
        res.render('singlePost', { post, logged_in: req.session.logged_in })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

// router.get('/dashboard/', withAuth, (req, res) => {
//     res.render('dashboard');
// });

module.exports = router;
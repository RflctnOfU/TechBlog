const router = require('express').Router();
const { User, Posts } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });

        const users = userData.map((project) => project.get({ plain: true }));
        console.log("hello world");

        const postData = await Posts.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
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

router.get('/login', withAuth, (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

module.exports = router;
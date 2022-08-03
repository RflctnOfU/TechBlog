const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Comment, Posts } = require('../../models');

router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await Posts.create({
            title: req.body.title,
            text: req.body.text,
            user_id: req.session.user_id,
        });
        res.status(200).json(postData)
    } catch (err) {
        res.status(500).json(err);
    }
    res.render('dashboard');
});


module.exports = router;
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');



router.post('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            text: req.body.text,
            user_id: req.session.user_id,
            posts_id: req.body.posts_id,
        });
        res.render('singlePost');
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/', async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.json(comments);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
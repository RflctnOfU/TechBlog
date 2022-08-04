const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            text: req.body.text,
            post_id: req.body.post_id,
        });
        res.status(200).json(commentData);
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }

});





module.exports = router;
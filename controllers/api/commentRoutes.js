const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');



router.post('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            text: req.body.text,
            user_id: req.session.user_id,
            posts_id: req.body.posts_id,
        });
        res.render('singlePost');
        // res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }

});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const comment = await Comment.findOne({ where: { id: req.params.id, user_id: req.session.user_id } });
        await comment.update({
            text: req.body.text,
        });

        res.json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteComment = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!deleteComment) {
            res.status(400).json({ message: 'Comment not found' });
            return;
        }
        // res.render('/');
        res.json({ message: "deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');



router.post('/', withAuth, async (req, res) => {
    try {
        console.log(req.body.post_id);
        const commentData = await Comment.create({
            text: req.body.text,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        });
        res.status(200).json(commentData);
        console.log(commentData);
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

// router.get('/:id', async (req, res) => {
//     try {
//         const comments = await Comment.findAll({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.json(comments);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.delete('/:id', async (req, res) => {
//     try {
//         const deleteComment = await Comment.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id,
//             },
//         });
//         if (!deleteComment) {
//             res.status(404).json({ message: 'Comment not found' });
//             return
//         }
//         res.json(deleteComment);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// router.put('/:id', withAuth, async (req, res) => {
//     try {
//         console.log(req.body);
//         const comment = await Comment.findOne({ where: { id: req.params.id, user_id: req.session.user_id } });
//         await comment.update({
//             text: req.body.text,
//         });

//         res.json(post);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })



module.exports = router;
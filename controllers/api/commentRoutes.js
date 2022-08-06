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

// router.get('/', async (req, res) => {
//     try {
//         const comments = await Comment.findAll();
//         res.json(comments);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/edit/:id', async (req, res) => {
//     try {
//         const commentData = await Comment.findByPk(req.params.id, {
//             where: {
//                 id: req.params.id
//             },
//             attributes: ['id', 'text', 'user_id', 'posts_id'],
//             include: [
//                 {
//                     model: User,
//                     attributes: ['id', 'name']
//                 }
//             ]
//         });
//         const comment = commentData.get({ plain: true });
//         res.render('editComment', {
//             layout: 'main.handlebars',
//             comment,
//             logged_in: req.session.logged_in
//         })
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

// router.put('/')

module.exports = router;
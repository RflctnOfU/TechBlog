const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Comment, Posts } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const postData = await Posts.create({
            title: req.body.title,
            text: req.body.text,
            user_id: req.session.user_id,
        });
        res.status(200).json(postData);
        res.render('dashboard');
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/', async (req, res) => {
    try {
        const postsData = await Posts.findAll();
        res.json(postsData);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.put('/:id', withAuth, async (req, res) => {
    try {
        const postUpdate = await Posts.update({
            _where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
            get where() {
                return this._where;
            },
            set where(value) {
                this._where = value;
            },
            title: req.body.title,
            text: req.body.text
        });

        res.json(postUpdate);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deletePost = await Posts.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!deletePost) {
            res.status(404).json({ message: 'Post not found' });
            return
        }
        res.json(deletePost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;
const router = require('express').Router();
const { User, Posts } = require('../models');
// const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
    // try {
    //     const userData = await User.findAll({
    //         attributes: {
    //             exclude:
    //                 ['password']
    //         },
    //         order: ['id', 'ASC'],
    //     });

    //     res.render('homepage', {
    //         userData,
    //     });
    // } catch (err) {
    //     res.status(500).json(err);
    // }
    try {
        res.render('homepage');
    } catch (error) {
        res.status(500).json(error);
    }
}
);

module.exports = router;
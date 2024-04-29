const router = require('express').Router();
const { BlogPost, User, Comment } = require('../../models');

// the `/api/blogpost` endpoint

// GET all BlogPost and users and comments regarding blog post
router.get('/', async (req, res) => {
    try {
        const blogpostData = await BlogPost.findAll({
            include: [{model: User, Comment}]
        });
        res.status(200).json(blogpostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const blogpostData = await BlogPost.findByPk({
            include: [{model: User, Comment}]
        });
        res.status(200).json(blogpostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const blogpostData = await BlogPost.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(blogpostData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// May need to come back and create an update path

router.delete('/:id', async (req, res) =>{
    try {
        const blogpostData = await BlogPost.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogpostData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        res.status(200).json(blogpostData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
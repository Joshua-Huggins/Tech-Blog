const router = require('express').Router();
const { User, Comment } = require('../../models');

// the `/api/comment` endpoint

// GET all comment and users regarding blog post
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [{model: User}]
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk({
            include: [{model: User}]
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// May need to come back and create an update path

router.delete('/:id', async (req, res) =>{
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
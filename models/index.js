// Need to bring over the models we exported to add relations between them
const User = require('./users');
const BlogPost = require('./BlogPost');
const Comment = require('./comment');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

// identifies that BlogPost belongs to a user and will connect them
BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

// Comments belong to a user and will connect them
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

// Comments also belong to a post
Comment.belongsTo(BlogPost, {
    foreignKey: 'blogpost_id',
    onDelete: "cascade"
});

// User has many comments and post will also have many comments
User.hasMany(Comment, {
    foreignKey: 'comment_id',
    onDelete: "cascade"
});

BlogPost.hasMany(Comment, {
    foreignKey: 'comment_id',
    onDelete: "cascade"
})

module.exports = { User, BlogPost, Comment };
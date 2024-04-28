const { Model, DataTypes } = require('sequelize');
const sequelize = require('');

class Comment extends Model {}

Comment.init({
    // Defines the id and sets it as the primary key for the comment
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Defines the column to hold the text for comments
    comment_text: {
        type: DataTypes.STRING,
        validate: {
            len: [5]
        }
    },
    // Defines the column to show user id for the comment needs to reference the user model
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    // Defines the info for the post id
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    }   
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
}
);

module.exports = Comment;
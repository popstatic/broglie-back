var mongoose = require('mongoose');


var TopicSchema = new mongoose.Schema({
    uuid:String,
    sujet: String,
    contenu: String,
    category: String,
    comments:[{ type: mongoose.Schema.Types.ObjectId, ref: 'CommentTopic' }],
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    creation: Number,
    edition: Number,
    favoris: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    image: String,
    sensible: Boolean,
    hidden:Boolean,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports =  mongoose.model('Topic', TopicSchema);

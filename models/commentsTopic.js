var mongoose = require('mongoose');


var CommentTopicSchema = new mongoose.Schema({
    uuid:String,
    contenu: String,
    referent : { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    creation: Number,
    edition: Number,
    media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
    sensible: Boolean,
    hidden:Boolean,
}, { timestamps: true });

module.exports = mongoose.model('CommentsTopic', CommentTopicSchema);
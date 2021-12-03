var mongoose = require('mongoose');


var CommentSchema = new mongoose.Schema({
    uuid:String,
    contenu: String,
    referent : { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    creation: Number,
    edition: Number,
    media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
    sensible: Boolean,
    hidden:Boolean,
}, { timestamps: true });

module.exports = mongoose.model('CommentPost', CommentSchema);
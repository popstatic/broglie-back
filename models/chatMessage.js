var mongoose = require('mongoose');


var chatMessageSchema = new mongoose.Schema({
    uuid:String,
    contenu: String,
    from : { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    creation: Number,
    edition: Number,
    media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
    sensible: Boolean,
    hidden:Boolean,
}, { timestamps: true });

module.exports = mongoose.model('chatMessage', chatMessageSchema);
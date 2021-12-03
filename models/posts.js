var mongoose = require('mongoose');


var PostSchema = new mongoose.Schema({
    uuid:String,
    content: String,
    media: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
    comments:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    creation: Number,
    edition: Number,
    sensible: Boolean,
    hidden:Boolean,
}, { timestamps: true });

module.exports =  mongoose.model('Post', TopicSchema);
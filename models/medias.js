var mongoose = require('mongoose');


var MediaSchema = new mongoose.Schema({
    type:String,
    caption: String,
    url: String,
    category: String,
    comments:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    creation: Number,
    edition: Number,
    sensible: Boolean,
    hidden:Boolean
}, { timestamps: true });

module.exports =  mongoose.model('Media', MediaSchema);
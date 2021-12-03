var mongoose = require('mongoose');


var EventSchema = new mongoose.Schema({
    uuid:String,
    sujet:String,
    type:String,
    content: String,
    location:locationSchema,
    date:Date,
    from:String,
    to:String,
    media: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
    comments:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    creation: Number,
    edition: Number,
    sensible: Boolean,
    hidden:Boolean,
    cancelled:Boolean,
    pending:Boolean,
    attendees:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports =  mongoose.model('Post', TopicSchema);
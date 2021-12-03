var mongoose = require('mongoose');

var NotificationSchema = new mongoose.Schema({
    uuid:String,
    type: String,
    abstract : String,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    receiver:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    creation: Number,
    sensible: Boolean,
    hidden:Boolean,
    seen:Boolean,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Notification', NotificationSchema);
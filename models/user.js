var mongoose = require('mongoose');


var locationSchema = new mongoose.Schema({
    adresse:String,
    latitude:Number,
    longitude:Number
})

var UserSchema = new mongoose.Schema({
    uuid:String,
    prenom: String,
    nom: String,
    pseudo: String,
    password:String,
    email:String,
    location:[locationSchema],
    pere:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    mere:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    conjoint:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    enfants:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    secret:String,
    birth:Number,
    bio: String,
    image: String,
    banner:String,
    hash: String,
    salt: String,
    lastToken:String,
    lastConnection:Number,
    situation:String,
    profession:String,
    domaine:String,
    interets:[String],
    inscription:Number,
    sensible:Boolean,
    status:Number,
    actif:Boolean
}, { timestamps: true });

module.exports =  mongoose.model('User', UserSchema)
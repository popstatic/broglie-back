var mongoose = require('./connectmongo');

const User = require('../models/user');
const Topic = require('../models/topics');
const CommentPost = require('../models/commentsPost');
const CommentTopic = require('../models/commentsTopic');
const Notification = require('../models/notifications');
const location = require('../models/notifications');

initUser()
//initTopic()
//initcomment()
//initNotifications

/*
        profilevue
        profilelike
        likeTopic
        likecomment
        commenttopic
        newmessage
    */

function initNotifications(){
    console.log("Check");
    var ObjectId = mongoose.Types.ObjectId
    notification = new Notification({
        uuid:"3456789-45dfd6789-45-4567-4567",
        type: "profilevue",
        abstract : "",
        creator: ObjectId("61984b1fc73b376de00727a8"),
        receiver:ObjectId("61984b1fc73b376de00727a8"),
        creation: 1637256267,
        sensible: true,
        hidden:false,
        seen:false,
        likes: [ObjectId("61984b1fc73b376de00727a8")],
        dislikes: []
    })
    notification.save()
    .then((user) => {
        console.log(user)
    })
    .catch((error) => {
        console.log(err);
    });

}

//initNotifications();


function initcomment(){
    var ObjectId = mongoose.Types.ObjectId
    comment = new Comment({
        uuid:"3456789-456789-45-4567-4567",
        contenu: "C'est nul !",
        referent : new ObjectId("61984b1fc73b376de00727a8"),
        creator: new ObjectId("61984b1fc73b376de00727a8"),
        creation: 1637256267,
        edition: 1637256267,
        favoris: [new ObjectId("61984b1fc73b376de00727a8")],
        image: "",
        sensible: false,
        hidden: false,
        likes: [new ObjectId("61984b1fc73b376de00727a8")],
        dislikes: []
    })
    comment.save();

}

function initUser() {
    var ObjectId = mongoose.Types.ObjectId
    user = new User({
        uuid:"1234",
        prenom: "Henry",
        nom: "de Boisseguin",
        pseudo: "Willy Nourson",
        password:"90bdd1c592cbca78fd358d5ed125d880",
        email:"hdeboisseguin@gmail.com",
        location:[{
            adresse:"192 rue de javel 75015 Paris",
            latitude:48.840215,
            longitude:2.292243
        }],
        pere:null,
        mere:null,
        conjoint:null,
        enfants:[],
        secret:"my salt",
        birth:433036800,
        bio: "J'me présente je m'appelle henry",
        image: "https://atypikoo.s3.eu-west-3.amazonaws.com/profile/atpk-profile-945479818-3-fullsize.jpg",
        banner:"https://media-exp1.licdn.com/dms/image/C5616AQEPqvE1jayKTA/profile-displaybackgroundimage-shrink_350_1400/0/1559914292864?e=1643846400&v=beta&t=dmqLkNpuqh8TlUF-NUAyb0ZcMcOjL7a2kPm7kR0NCOg",
        hash: "String",
        salt: "String",
        lastToken:"98020d8a-1064-4361-a9f0-378f0ee49905",
        lastConnection:1638432777,
        situation:"Célibataire",
        profession:"CTO",
        domaine:"IT",
        interets:["photo","musique","littérature"],
        inscription:1638432777,
        sensible:false,
        status:0,
        actif:true

    })

    user.save();
}

function initNotifications(){

}


function initTopic() {
    var ObjectId = mongoose.Types.ObjectId
    topic = new Topic({
        uuid:"88857abe-ad05-4468-87d8-635b821063cf",
        sujet: "L'Oasis Kofi Choppe",
        contenu: "Bienvenue à L'Oasis, un lieu convivial où l'on se retrouve entre animaux atypiques, pour raconter sa journée, tout simplement. Alors,...",
        comments:[new ObjectId("619e2f52094ac7e85896dfb6")],
        creator: new ObjectId("61984b1fc73b376de00727a8"),
        creation: 1590769800,
        edition:1590769800,
        favoris: [],
        image: "https://atypikoo.s3.eu-west-3.amazonaws.com/profile/atpk-profile-945479818-3-fullsize.jpg",
        sensible: false,
        hidden:false,
        likes: [new ObjectId("61984b1fc73b376de00727a8")],
        dislikes: []
    })
    topic.save();
}



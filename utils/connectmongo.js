var mongoose = require('mongoose');
var config = require("../config");
mongoose 
 .connect(config.mongodb.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

 module.exports = mongoose;
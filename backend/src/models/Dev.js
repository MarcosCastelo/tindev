const { Schema, model} = require('mongoose');

const DevSchema = new Schema({
    name : {
        required : true,
        type : String
    },
    user : {
        required : true,
        type : String
    },
    bios : String,
    avatar : {
        required : true,
        type : String
    },
    likes : [{
        type : Schema.Types.ObjectId,
        ref : 'Dev'
    }],
    dislikes : [{
        type : Schema.Types.ObjectId,
        ref : 'Dev'
    }],

}, {
    timestamps : true
});

module.exports = model('Dev', DevSchema);
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ({
    username:{
        type:String,
        required: true,
        unique:true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required: true,
    },
    avatar:{
        type:String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWGvR7QQnnchsFqxYO3pV3ySE6qLj6-ojzAbUJ0KusYv_Cqp0ud-B-64TP30PwJ6wr9c&usqp=CAU',
    },

},{timestamp : true});

const User = mongoose.model('User',userSchema);

export default User;
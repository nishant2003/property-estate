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
        default:"https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D357568563311439&tbnid=UmSHIsrYFFkKxM&vet=12ahUKEwiZjYaktruHAxWQ9DgGHSEzMiYQMygBegQIARBG..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D357568563311439%26id%3D100071748955705%26set%3Da.190228793378751%26locale%3Den_GB&docid=5Wd66b-wmu270M&w=736&h=737&q=me%20my%20playlist%20and%20myself&ved=2ahUKEwiZjYaktruHAxWQ9DgGHSEzMiYQMygBegQIARBG",
    },

},{timestamp : true});

const User = mongoose.model('User',userSchema);

export default User;
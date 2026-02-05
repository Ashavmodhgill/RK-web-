import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true,
    },
    email: {
        type: string,
        required: true,
        unique: true,
    },
    password: {
        type: string,
        required: true
    }
}, {timestamps: true});

// this is bycrypt we are encrypting the password  for your understanding
UserSchema.pre('save', function (next){
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password,SALT);
    user.password= encryptedPassword;
    next();

});

UserSchema.methods.comparePassword = function compare(password){
    return bcrypt.compareSync(password, this.password);
}

UserSchema.methods.genJWT = function generate(){
     return jwt.sign({id: this.id, email: this.email}, 'twitter_secret_key', {
        expiresIn: '1h'
     })
}

const User = mongoose.model("User", userSchema);
export default User;





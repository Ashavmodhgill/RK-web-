import { UserRepository } from "../repository/index.js";
import User from "../models/user.js";

class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }
    async signup(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

async getuserByEmail(email){
    try {
        const user = await this.userRepository.findOne({email});
        return user;
    } catch (error) {
        console.log("Something went wrong in the service layer");
        throw error;
    }
}

  async signin(data){
    try {
        const user = await this.getuserByEmail(data.email);
        if(!user){
            throw {
                message: "User not found with the given email"
                  }
        }
    if (!user.comparePassword(data.password)){
        throw {
            message: "Invalid password"
        }
    }
    const token = user.genJWT();
    return token;
    } catch (error) {
        throw error;
    }
  }
}

export default UserService;

import Repository from "./crud-repository.js";
import User from "../model/User.js";

class UserRepository extends Repository{
    constructor(){
        super(User);
    }
    async findBy(data){
        try {
            const response = await this.findOne(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in user repository");
            throw error;
        }
    }
}

export default UserRepository;
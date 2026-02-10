class Repository {
    constructor(model){
        this.model = model;
    }
     async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
           console.log("something went wrong in crud repository");
           throw error;
        }
     }

     async destroy(id){
        try {
            const response = await this.model.findAndDelete(id);
            return response;
            
        } catch (error) {
             console.log("something went wrong in crud repository");
           throw error;
        }
     }
     async get(id){
        try {
            const response = await this.model.findById(id);
            return response;
            
        } catch (error) {
             console.log("something went wrong in crud repository");
           throw error;
        }
     }
     async getAll(){
        try {
            const response = await this.model.find({});
            return response;
        } catch (error) {
             console.log("something went wrong in crud repository");
           throw error;
        }
     }

      async findOne(filter) {
  try {
    const result = await this.model.findOne(filter);
    return result;
  } catch (error) {
    console.log("Something went wrong in crud repo");
    throw error;
  }
}
 async update(id, data){
    try {
        const response = await this.model.findByIdAndUpdate(id,data,{new:true});
        return response;
        
    } catch (error) {
         console.log("Something went wrong in crud repository");
         throw error;
    }
 }
 
  }
    
  export default Repository;

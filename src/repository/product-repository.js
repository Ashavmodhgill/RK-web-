import Repository from "./crud-repository.js";

class ProductRepository extends Repository{
    constructor(model) {
        super(model)
    }
    async findByCategory(category){
       try {
        const response = await this.model.find({category})
        return response;
       } catch (error) {
        console.log("Something went wrong in product repository");
        throw error;
       }
    }
    async SearchByName(name) {
        try {
            const response = await this.model.find({ name: { $regex: name, $options: 'i' } });
            return response;
        } catch (error) {
            console.log("Something went wrong in product repository");
            throw error;
        }
    }
     async updateStock(id, quantity){
        try {
          const response = await this.model.findByIdAndUpdate(
            id, 
            { $inc: { stock: -quantity } },
        { new: true }

          );
            return response;
        } catch (error) {
            console.log("Something went wrong in product repository");
            throw error;
        }
     }
     async findBy(data) {
    try {
      const response = await this.findOne(data);
      return response;
    } catch (error) {
      console.log("Something went wrong in ProductRepository.findBy");
      throw error;
    }
  }


}


export default ProductRepository;
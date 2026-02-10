import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
         trim: true
    },
    description: {
        type: String,
         trim: true,
         maxlength: 500,

    },
    price:  {
        type: Number,
        required:true,
        min:0
    },
    category: {
        type: String,
        required: true,
        enum: ['fastfood','sweets'],
        trim: true
    },
stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  imageUrl: {
    type: String,
    default: 'default-product.png'
  }, 
}, {timestamps: true});

export default mongoose.model("Product", productSchema);
import ProductService  from "../service/product -service.js";
 
const productService = new ProductService();

export const createProduct = async (req, res) => {
    try {
      const response = await productService.createProduct(req.body);
      return res.status(201).json({
        success: true,
        data: response,
        message: "Product created successfully",
        error: {}
      });
    } catch (error) { 
        console.error('ProductController.createProduct Error:', error);
         return res.status(500).json({
        success: false,
        message: 'something went wrong in product controller',
        data:{},
        err: error.message || error
    });
    }
}

export const getAllProduct = async (req,res) => {
    try {
      const response = await productService.getAllProducts();
      return res.status(200).json({
        success: true,
        data: response,
        message: "All products retrieved successfully",
        error: {}
      });
    } catch (error) {
        console.error('ProductController.getAllProduct Error:', error);
        return res.status(500).json({
        success: false,
        message: 'something went wrong in product controller',
        data:{},
        err: error.message || error
    });
    }
    
}

export const getProductById = async (req,res)  => {
    try {
        const response = await productService.getProductById(req.params.id);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Product retrieved successfully",
            error: {}
        });
    } catch (error) {
        console.error('ProductController.getProductById Error:', error);
        return res.status(500).json({
            success: false,
            message: 'something went wrong in product controller',
            data:{},
            err: error.message || error
        });
    }

}

export const findProductsByCategory = async (req,res) => {
    try {
        const response = await productService.findProductsByCategory(req.params.category);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Products retrieved by category successfully",
            error: {}
        });
    } catch (error) {
        console.error('ProductController.findProductsByCategory Error:', error);
         return res.status(500).json({
            success: false,
            message: 'something went wrong in product controller',
            data:{},
            err: error.message || error
        });
    }
}

export const searchProductsByName = async (req,res) => {
    try {
        const response = await productService.searchProductsByName(req.params.name);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Products searched by name successfully",
            error: {}
        });
    } catch (error) {
        console.error('ProductController.searchProductsByName Error:', error);
        return res.status(500).json({
            success: false,
            message: 'something went wrong in product controller',
            data:{},
            err: error.message || error
        });
    }
}
 export const updateProductStock = async (req,res) => {
    try {
        const response = await productService.updateProductStock(req.params.id, req.body.stock);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Product stock updated successfully",
            error: {}
        });
    } catch (error) {
        console.error('ProductController.updateProductStock Error:', error);
        return res.status(500).json({
            success: false,
            message: 'something went wrong in product controller',
            data:{},
            err: error.message || error
        });
    }
 }
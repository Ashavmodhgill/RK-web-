import UserService from "../service.js/User-service.js";
 const userService = new UserService();

export const signup = async (req, res) => {
     try {
        const response = await userService.signup({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            sucess: true,
            message: "User created Sucessfully",
            data: response,
            error: {}

        });
     } catch (error) {
        return res.status(500).json({
            sucess: false,
            message: "something went wrong in the controler",
            data: {},
            err: error
        })
     }
}


export const login = async (req,res) => {
    try {
        const token =  await userService.signin(req.body);
    return  res.status(200).json({
        sucess: true,
        message: 'looged in sucessfully',
        data: token,
        err: {}
    })
    } catch (error) {
        return res.status(500).json({
        sucess: false,
        message: 'something went wrong',
        data:{},
        err: error
    });
    }
}
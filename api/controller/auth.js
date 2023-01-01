import UserSchema from "../models/User.js"
import bcrypt from "bcryptjs";

export const register = async (req, res, next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        const newUser = new UserSchema({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            phone:req.body.phone,
            city:req.body.city,
            country:req.body.country
        })

        await newUser.save();
        res.status(201).send("User has been created successfully");
    }catch(err){
        next(err);
    }
}
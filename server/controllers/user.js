import User from '../models/user.js';

export const getUser = (req, res) => {
    try {
        const users = User.find();

        res.status(200).json(users);
    } catch (e) {
        res.status(404).json({ message: e.message });
    }
}

export const createUser = async (req, res) => {
    const user = req.body;

    const newUser = new User(user);
    try{
        await newUser.save((err, user) => {
            if (err) {
                res.status(400).json({ message: err.message });
            } else {
                res.status(201).json(user);
            }
        });
    }
    catch(e){
        res.status(404).json({ message : e.message });
    }
    
}
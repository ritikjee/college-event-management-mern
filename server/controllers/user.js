import User from '../models/user.model.js';
import College from '../models/college.model.js';
import bcryptjs from 'bcryptjs';


export const getAllUsers = async (req, res) => {

    try {
        const users = await User.find();
        const data = [];
        users.forEach(user => {
            data.push({
                id: user._id,
                name: user.name,
                email: user.email,
                photo: user.photo,
                about: user.about,
                college: user.college,
                role: user.role,
                followers: user.followers,
                following: user.following
            })
        });

        res.status(200).json({ users: data });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user.password = undefined;
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export const registerUser = async (req, res) => {
    const { name, email, password, about, college } = await req.body;

    const res1 = await User.findOne({ $or: [{ email: identifier }, { userName: identifier }] });
    if (res1) {
        return res.status(400).json({ error: "User already exists" });
    }

    if (college) {
        const collegeRes = await College.findById(college);
        if (collegeRes) {
            const user = new User({
                name,
                email,
                password: await bcryptjs.hash(password, 10),
                about,
                college: collegeRes
            });
            res.status(201).json({ user });
        }
        else {
            const user = new User({
                name,
                email,
                password: await bcryptjs.hash(password, 10),
                about
            });
            res.status(201).json({ user });
        }

    }
    else {
        const user = new User({
            name,
            email,
            password: await bcryptjs.hash(password, 10),
            about
        });
        res.status(201).json({ user });
    }


}

export const loginUser = async (req, res) => {
    const { identifier, password } = await req.body;

    try {
        const user = await User.findOne({ $or: [{ email: identifier }, { userName: identifier }] });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        const isMatch = bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        user.password = undefined;
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export const updateUser = async (req, res) => {
    const { name, email, password, about, college } = await req.body;
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            user.name = name;
            user.email = email;
            user.password = await bcryptjs.hash(password, 10);
            user.about = about;
            user.college = college;
            const savedUser = await user.save();
            res.status(200).json({ user: savedUser });
        }
        else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
}


const User = require("../models/user");

exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: "User created successfully", userId: user._id });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.getUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Server error" });
    }
};

/*
const user = await User.findById(userId)
            .populate("pantry")
            .populate("groceryList")
            .populate("favoriteRecipes");
*/
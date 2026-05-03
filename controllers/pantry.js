const PantryItem = require('../models/pantryItem');
const User = require('../models/user');

exports.addPantryItem = async (req, res) => {
    try {
        const { userId, ingredientId, quantity, unit } = req.body;
        if (!userId || !ingredientId ){
            return res.status(400).json({ message: "User ID and Ingredient ID are required" });
        }
        const pantryItem = new PantryItem({
            user:userId,
            ingredient:ingredientId,
            quantity,
            unit
        });
        await pantryItem.save();

        await User.findByIdAndUpdate(userId, { $push: { pantry: pantryItem._id } });

        const populatedPantryItem = await PantryItem.findById(pantryItem._id).populate('ingredient', 'name');
        res.status(201).json({ message: "Pantry item added successfully", pantryItem: populatedPantryItem });
    } catch (error) {
        console.error("Error adding pantry item:", error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.getPantryItems = async (req, res) => {
    try {
        const userId = req.params.userId;
        const pantryItems = await User.findById(userId).populate({'pantry': { path: 'pantry', populate: { path: 'ingredient', select: 'name' } } }).select('pantry');
        //const pantryItems = await PantryItem.find({ user: userId }).populate('ingredient', 'name');
        res.status(200).json({ pantryItems });
    } catch (error) {
        console.error("Error fetching pantry items:", error);
        res.status(500).json({ message: "Server error" });
    }
};
const PantryItem = require('../models/pantryItem');
const User = require('../models/user');
const Ingredient = require('../models/ingredient');
const Pantry = require('../models/pantry');

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

exports.addItem = async (req, res) => {
    try {
        const {userId, ingredient, quantity, unit, category} = req.body;
        //console.log("request body",{userId,ingredient, quantity, unit, category});
        
        if (!userId || !ingredient || !quantity || !unit || !category) {
            return res.status(400).json({ message: "All fields are required" });
        }
        
        
        const ingredientDoc = await Ingredient.findOne({ name: ingredient.trim().toLowerCase() });
        let ingredientId;
        if (ingredientDoc) {
            ingredientId = ingredientDoc._id;
            console.log("ingredient id: ",{ingredientId});
            
        } else {
            const newIngredient = new Ingredient({ name: ingredient.trim().toLowerCase() });
            await newIngredient.save();
            ingredientId = newIngredient._id;
            console.log("new ingredient created with id: ",{ingredientId});
        }

        const pantryItem = new PantryItem({
            ingredient: ingredientId,
            quantity,
            unit,
            category
        });
        //await pantryItem.save();
        console.log("pantryItem: ",{pantryItem});
        

        let pantry = await Pantry.findOne({ user: userId });
        if (!pantry) {
            pantry = new Pantry({ user: userId, items: [pantryItem] });
            console.log("pantry: ",{pantry});
            await pantry.save();

            res.status(201).json({ message: "Pantry created and item added successfully", pantryItem });
            
        } else {
            const existingItemIndex = pantry.items.findIndex(item => item.ingredient.toString() === ingredientId.toString());
                if (existingItemIndex !== -1) {
                    pantry.items[existingItemIndex].quantity += quantity;
                    console.log("pantry: ",{pantry});
                    await pantry.save();
                    res.status(201).json({ message: "Pantry item updated successfully", pantryItem });
                } else {
                    pantry.items.push(pantryItem);
                    console.log("pantry: ",{pantry});
                    await pantry.save();
                    res.status(201).json({ message: "Pantry item added successfully", pantryItem });
                }
        }
        
    } catch (error) {
        console.error("Error adding pantry item:", error);
        res.status(500).json({ message: "Server error" });
    }
};
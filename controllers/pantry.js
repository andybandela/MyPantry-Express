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
        const userId = req.query.userID;
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }
        const pantry = await Pantry.findOne({ user: userId }).populate('items.ingredient', 'name');
        if (!pantry) {
            return res.status(404).json({ message: "Pantry not found for this user" });
        }
        const cat = [...new Set(pantry.items.map(item => item.category))];
        const itemsByCategory = {};
        const itemsCategory = {};
        const categories = [];
        cat.forEach(category => {
            itemsByCategory[category] = pantry.items.filter(item => item.category === category);
            if(!itemsCategory.category){
                itemsCategory.category = category;
                itemsCategory.ingredients = pantry.items.filter(item => item.category === category);
                categories.push(itemsCategory);
            }
            if(itemsCategory.category === category){
                itemsCategory.ingredients = pantry.items.filter(item => item.category === category);
                categories.push(itemsCategory);
            }
        });
        console.log("categories: ", cat);
        console.log("items by category: ", itemsByCategory);
        res.status(200).json({ pantryItems: pantry.items, itemsByCategory });
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

exports.increaseQuantity = async (req, res) => {
    try {
        const {userId, ingredientId, amount} = req.body;
        if (!userId || !ingredientId) {
            return res.status(400).json({ message: "User ID, and Ingredient ID are required" });
        }
        if (!amount){
            await Pantry.findOneAndUpdate(
                { user: userId, "items.ingredient": ingredientId },
                { $inc: { "items.$.quantity": 1 } }
            );
            
        } else {
            await Pantry.findOneAndUpdate(
                { user: userId, "items.ingredient": ingredientId },
                { $inc: { "items.$.quantity": amount } }
            );
        }
        res.status(200).json({ message: "Pantry item quantity increased successfully" });
    } catch (error) {
        console.error("Error increasing pantry item quantity:", error);
        res.status(500).json({ message: "Server error" });
    }
}

exports.decreaseQuantity = async (req, res) => {
    try {
        const {userId, ingredientId, amount} = req.body;
        if (!userId || !ingredientId) {
            return res.status(400).json({ message: "User ID, and Ingredient ID are required" });
        }
        if (!amount){
            await Pantry.findOneAndUpdate(
                { user: userId, "items.ingredient": ingredientId },
                { $inc: { "items.$.quantity": -1 } }
            );
            
        } else {
            const pantry = await Pantry.findOne({ user: userId, "items.ingredient": ingredientId });
            const item = pantry.items.find(item => item.ingredient.toString() === ingredientId.toString());
            if (item){
                let qty = item.quantity;
                if (amount > qty){
                    return res.status(400).json({ message: "Amount to decrease exceeds current quantity" });
                }
            }
            
            await Pantry.findOneAndUpdate(
                { user: userId, "items.ingredient": ingredientId },
                { $inc: { "items.$.quantity": -amount } }
            );
        }
        res.status(200).json({ message: "Pantry item quantity decreased successfully" });
    } catch (error) {
        console.error("Error decreasing pantry item quantity:", error);
        res.status(500).json({ message: "Server error" });
    }
}

exports.deletePantryItem = async (req, res) => {
    try {
        
        const userId = req.query.userId;
        const ingredientId = req.query.ingredientId;
        if (!userId || !ingredientId) {
            return res.status(400).json({ message: "User ID, and Ingredient ID are required" });
        }
        const pantry = await Pantry.findOne({ user: userId });
        if (!pantry) {
            return res.status(404).json({ message: "Pantry not found for this user" });
        } else {
            pantry.items.pull({ ingredient: ingredientId });
            await pantry.save();
            res.status(200).json({ message: "Pantry item deleted successfully" });
        }
    } catch (error) {
        console.error("Error deleting pantry item:", error);
        res.status(500).json({ message: "Server error" });
    }
}
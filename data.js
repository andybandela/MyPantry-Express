const recipes = [
    {
        title: 'Chicken Ramen',
        param: 'chicken_ramen',
        Description: 'An easy recipe for making delicious ramen from scratch.',
        posted: '2026/02/15',
        _id: 0
    },
    {
        title: 'Carbonara Pasta',
        param: 'carbonara_pasta',
        Description: 'A creamy pasta dish made with few ingredients.',
        posted: '2026/02/15',
        _id: 1
    },
    {
        title: 'Beef fried rice',
        param: 'beef_fried_rice',
        Description: 'A quick and easy dish that packs lots of flavors.',
        posted: '2026/02/15',
        _id: 2
    },
    {
        title: 'Pork Stew with rice',
        param:'pork_stew',
        Description: `You've never tasted pork this tender and tasty.`,
        posted: '2026/02/15',
        _id: 3
    },
    {
        title: 'Chicken Alfredo',
        param : 'chicken_alfredo',
        Description: 'Creamy, tasty and rich pasty dish that leaves you wanting more.',
        posted: '2026/02/15',
        _id: 4
    },
    {
        title: 'Rice and Peas/Beans',
        param:'rice_and_peas',
        Description: 'A perfect balance of flavor, richness and spicyness.',
        posted: '2026/02/15',
        _id: 5
    },
    {
        title: 'Bean stew',
        param:'bean_stew',
        Description: `A traditional and simple dish that never lets you down.`,
        posted: '2026/02/15',
        _id: 6
    },
    {
        title: 'Glazed Salmon with roasted veggie',
        param:'glazed_salmon',
        Description: 'Tasty and easy to make dish.',
        posted: '2026/02/15',
        _id: 7
    },
    {
        title: 'Pork Ramen',
        param: 'pork_ramen',
        Description: 'An easy recipe for making delicious ramen from scratch.',
        posted: '2026/02/15',
        _id: 8
    }
];

const Chicken_recipe_data = {
    recipe_name : 'Carbonara Pasta',
    recipe_instructions : '',
    meta_info: [
        {
            meta_type: 'prep time',
            meta_time: 8
        },
        {
            meta_type: 'cook time',
            meta_time: 15
        },
        {
            meta_type: 'servings',
            meta_time: 4
        }
    ],
    recipe_ingredients : [
        {
            ingredient: 'Eggs',
            available: 'yes',
            sub:'available'
        },
        {
            ingredient: 'Pasta',
            available: 'yes',
            sub:'available'
        },
        {
            ingredient: 'Salt',
            available: 'yes',
            sub:'available'
        },
        {
            ingredient: 'Black Pepper',
            available: 'yes',
            sub:'available'
        },
        {
            ingredient: 'Bacon',
            available: 'sub',
            sub:'Mushroom'
        },
        {
            ingredient: 'Garlic',
            available: 'yes',
            sub:'available'
        }
    ]
};

const Pork_recipe_data = {
    recipe_name : 'Chicken Ramen',
    recipe_instructions : '',
    meta_info: [
        {
            meta_type: 'prep time',
            meta_time: 15
        },
        {
            meta_type: 'cook time',
            meta_time: 30
        },
        {
            meta_type: 'rest time',
            meta_time: 20
        },
        {
            meta_type: 'fridge time',
            meta_time: 10
        },
        {
            meta_type: 'servings',
            meta_time: 4
        }
    ],
    recipe_ingredients : [
        {
            ingredient: 'Chicken',
            available: 'yes',
            sub:'available'
        },
        {
            ingredient: 'Noodles',
            available: 'yes',
            sub:'available'
        },
        {
            ingredient: 'MSG',
            available: 'no',
            sub:'not available'
        },
        {
            ingredient: 'Salt',
            available: 'yes',
            sub:'available'
        },
        {
            ingredient: 'Spring Onion',
            available: 'sub',
            sub:'sub with Onion'
        },
        {
            ingredient: 'Corn',
            available: 'no',
            sub:'not available'
        },
        {
            ingredient: 'Garlic',
            available: 'yes',
            sub:'available'
        }
    ]
};

module.exports = {
    recipes,
    Chicken_recipe_data,
    Pork_recipe_data
}
const recipes = [
    {
        title: 'Chicken Ramen',
        param: 'chicken_ramen',
        Description: 'An easy recipe for making delicious ramen from scratch.',
        posted: '2026/02/15',
        imageUrl: 'images/chicken_ramen.png',
        _id: 0
    },
    {
        title: 'Carbonara Pasta',
        param: 'carbonara_pasta',
        Description: 'A creamy pasta dish made with few ingredients.',
        posted: '2026/02/15',
        imageUrl: 'images/carbonara.png',
        _id: 1
    },
    {
        title: 'Beef fried rice',
        param: 'beef_fried_rice',
        Description: 'A quick and easy dish that packs lots of flavors.',
        posted: '2026/02/15',
        imageUrl: 'images/beef_fried_rice.png',
        _id: 2
    },
    {
        title: 'Pork Stew with rice',
        param: 'pork_stew',
        Description: `You've never tasted pork this tender and tasty.`,
        posted: '2026/02/15',
        imageUrl: 'images/pork_stew.png',
        _id: 3
    },
    {
        title: 'Chicken Alfredo',
        param: 'chicken_alfredo',
        Description: 'Creamy, tasty and rich pasty dish that leaves you wanting more.',
        posted: '2026/02/15',
        imageUrl: 'images/chicken_alfredo.png',
        _id: 4
    },
    {
        title: 'Rice and Peas/Beans',
        param: 'rice_and_peas',
        Description: 'A perfect balance of flavor, richness and spicyness.',
        posted: '2026/02/15',
        imageUrl: 'images/rice_and_peas.png',
        _id: 5
    },
    {
        title: 'Bean stew',
        param: 'bean_stew',
        Description: `A traditional and simple dish that never lets you down.`,
        posted: '2026/02/15',
        imageUrl: 'images/beans.png',
        _id: 6
    },
    {
        title: 'Glazed Salmon with roasted veggie',
        param: 'glazed_salmon',
        Description: 'Tasty and easy to make dish.',
        posted: '2026/02/15',
        imageUrl: 'images/salmon.png',
        _id: 7
    },
    {
        title: 'Pork Ramen',
        param: 'pork_ramen',
        Description: 'An easy recipe for making delicious ramen from scratch.',
        posted: '2026/02/15',
        imageUrl: 'images/pork_ramen.png',
        _id: 8
    }
];

const categories = {
    main: [
        {
            category: "Meat & Poultry",
            recipes: [0,1,2,3,4,8],
            param: "/category?name=meat_and_poultry&_id=0&cat=main",
            imageUrl: "http://localhost:8080/images/meat.png"
        },
        {
            category: "Fish & Crustacean",
            recipes: [7],
            param: "/category?name=fish_and_crustacean&_id=1&cat=main",
            imageUrl: "http://localhost:8080/images/fish.png"
        },
        {
            category: "Vegetarian",
            recipes: [5,6],
            param: "/category?name=vegeterian&_id=2&cat=main",
            imageUrl: "http://localhost:8080/images/vege.png"
        },
        {
            category: "Dessert",
            recipes: [],
            param: "/category?name=dessert&_id=3&cat=main",
            imageUrl: "http://localhost:8080/images/dessert.png"
        },
        {
            category: "Baking",
            recipes: [],
            param: "/category?name=baking&_id=4&cat=main",
            imageUrl: "http://localhost:8080/images/baking.png"
        }
    ],
    sub : [
        {
            category: "French",
            recipes: [7],
            param: "/category?name=french&_id=0&cat=sub"
        },
        {
            category: "Chinese",
            recipes: [0,2,8],
            param: "/category?name=chinese&_id=1&cat=sub"
        },
        {
            category: "Italian",
            recipes: [1,4],
            param: "/category?name=italian&_id=2&cat=sub"
        },
        {
            category: "Congolose",
            recipes: [3,5,6],
            param: "/category?name=congolese&_id=3&cat=sub"
        }
    ]
}


const Chicken_recipe_data = {
    recipe_name: 'Carbonara Pasta',
    recipe_instructions: '',
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
    recipe_ingredients: [
        {
            ingredient: 'Eggs',
            available: 'yes',
            sub: 'available'
        },
        {
            ingredient: 'Pasta',
            available: 'yes',
            sub: 'available'
        },
        {
            ingredient: 'Salt',
            available: 'yes',
            sub: 'available'
        },
        {
            ingredient: 'Black Pepper',
            available: 'yes',
            sub: 'available'
        },
        {
            ingredient: 'Bacon',
            available: 'sub',
            sub: 'Mushroom'
        },
        {
            ingredient: 'Garlic',
            available: 'yes',
            sub: 'available'
        }
    ]
};

const Pork_recipe_data = {
    recipe_name: 'Chicken Ramen',
    recipe_instructions: '',
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
    recipe_ingredients: [
        {
            ingredient: 'Chicken',
            available: 'yes',
            sub: 'available'
        },
        {
            ingredient: 'Noodles',
            available: 'yes',
            sub: 'available'
        },
        {
            ingredient: 'MSG',
            available: 'no',
            sub: 'not available'
        },
        {
            ingredient: 'Salt',
            available: 'yes',
            sub: 'available'
        },
        {
            ingredient: 'Spring Onion',
            available: 'sub',
            sub: 'sub with Onion'
        },
        {
            ingredient: 'Corn',
            available: 'no',
            sub: 'not available'
        },
        {
            ingredient: 'Garlic',
            available: 'yes',
            sub: 'available'
        }
    ]
};

const recipe_content = [
    {
        recipe_name: 'Chicken Ramen',
        recipe_instructions: '',
        imageUrl: 'images/chicken_ramen.png',
        meta_info: [
            {
                meta_type: 'prep time',
                meta_time: 10
            },
            {
                meta_type: 'cook time',
                meta_time: 10
            },
            {
                meta_type: 'servings',
                meta_time: 2
            }
        ],
        recipe_ingredients: [
            {
                ingredient: 'Chicken',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Noodles',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Green Onion',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Soy Sauce',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Oil',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Salt',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Ginger',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Garlic',
                available: 'yes',
                sub: ''
            }
        ]
    },
    {
        recipe_name: 'Carbonara Pasta',
        recipe_instructions: '',
        imageUrl: 'images/carbonara.png',
        meta_info: [
            {
                meta_type: 'prep time',
                meta_time: 10
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
        recipe_ingredients: [
            {
                ingredient: 'Carbonara',
                available: 'yes',
                sub: 'Sub with Bacon'
            },
            {
                ingredient: 'Spagetti',
                available: 'yes',
                sub: 'sub with Tagliatele'
            },
            {
                ingredient: 'Egg',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Parmesan',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Salt',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Pepper',
                available: 'yes',
                sub: ''
            }
        ]
    },
    {
        recipe_name: 'Beef Fried Rice',
        recipe_instructions: '',
        imageUrl: 'images/beef_fried_rice.png',
        meta_info: [
            {
                meta_type: 'prep time',
                meta_time: 10
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
        recipe_ingredients: [
            {
                ingredient: 'Beef',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Rice',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Onion',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Green Pepper',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Carrot',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Salt',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Pepper',
                available: 'yes',
                sub: ''
            },
            {
                ingredient: 'Garlic',
                available: 'yes',
                sub: ''
            }
        ]
    },
    {
        recipe_name: 'Pork stew with rice',
        recipe_instructions: '',
        imageUrl: 'images/pork_stew.png',
        meta_info: [
            {
                meta_type: 'prep time',
                meta_time: 0
            },
            {
                meta_type: 'cook time',
                meta_time: 0
            },
            {
                meta_type: 'rest time',
                meta_time: 0
            },
            {
                meta_type: 'fridge time',
                meta_time: 0
            },
            {
                meta_type: 'servings',
                meta_time: 0
            }
        ],
        recipe_ingredients: [
            {
                ingredient: '',
                available: 'yes',
                sub: ''
            }
        ]
    },
    {
        recipe_name: 'Chicken Alfredo',
        recipe_instructions: '',
        imageUrl: 'images/chicken_alfredo.png',
        meta_info: [
            {
                meta_type: 'prep time',
                meta_time: 0
            },
            {
                meta_type: 'cook time',
                meta_time: 0
            },
            {
                meta_type: 'rest time',
                meta_time: 0
            },
            {
                meta_type: 'fridge time',
                meta_time: 0
            },
            {
                meta_type: 'servings',
                meta_time: 0
            }
        ],
        recipe_ingredients: [
            {
                ingredient: '',
                available: 'yes',
                sub: ''
            }
        ]
    },
    {
        recipe_name: 'Rice and Peas/Bean',
        recipe_instructions: '',
        imageUrl: 'images/rice_and_peas.png',
        meta_info: [
            {
                meta_type: 'prep time',
                meta_time: 0
            },
            {
                meta_type: 'cook time',
                meta_time: 0
            },
            {
                meta_type: 'rest time',
                meta_time: 0
            },
            {
                meta_type: 'fridge time',
                meta_time: 0
            },
            {
                meta_type: 'servings',
                meta_time: 0
            }
        ],
        recipe_ingredients: [
            {
                ingredient: '',
                available: 'yes',
                sub: ''
            }
        ]
    },
    {
        recipe_name: 'Bean stew',
        recipe_instructions: '',
        imageUrl: 'images/beans.png',
        meta_info: [
            {
                meta_type: 'prep time',
                meta_time: 0
            },
            {
                meta_type: 'cook time',
                meta_time: 0
            },
            {
                meta_type: 'rest time',
                meta_time: 0
            },
            {
                meta_type: 'fridge time',
                meta_time: 0
            },
            {
                meta_type: 'servings',
                meta_time: 0
            }
        ],
        recipe_ingredients: [
            {
                ingredient: '',
                available: 'yes',
                sub: ''
            }
        ]
    },
    {
        recipe_name: 'Glazed Salmon with roasted veggies',
        recipe_instructions: '',
        imageUrl: 'images/salmon.png',
        meta_info: [
            {
                meta_type: 'prep time',
                meta_time: 0
            },
            {
                meta_type: 'cook time',
                meta_time: 0
            },
            {
                meta_type: 'rest time',
                meta_time: 0
            },
            {
                meta_type: 'fridge time',
                meta_time: 0
            },
            {
                meta_type: 'servings',
                meta_time: 0
            }
        ],
        recipe_ingredients: [
            {
                ingredient: '',
                available: 'yes',
                sub: ''
            }
        ]
    },
    {
        recipe_name: 'Pork ramen',
        recipe_instructions: '',
        imageUrl: 'images/pork_ramen.png',
        meta_info: [
            {
                meta_type: 'prep time',
                meta_time: 0
            },
            {
                meta_type: 'cook time',
                meta_time: 0
            },
            {
                meta_type: 'rest time',
                meta_time: 0
            },
            {
                meta_type: 'fridge time',
                meta_time: 0
            },
            {
                meta_type: 'servings',
                meta_time: 0
            }
        ],
        recipe_ingredients: [
            {
                ingredient: '',
                available: 'yes',
                sub: ''
            }
        ]
    }
]
module.exports = {
    recipes,
    Chicken_recipe_data,
    Pork_recipe_data,
    recipe_content,
    categories
}
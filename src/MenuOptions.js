const meals = {
    'Cascade Burger': {
        type: 'single',
        variations: [],
        description: 'House-made tender beef patty, bacon, beetroot, egg, lettuce, tomato, caramelised onion, cheese & tomato chutney, served with a side of beer battered fries'
    },
    'Chicken Burger': {
        type: 'single',
        variations: [],
        description: 'Marinated Free Range chicken breast with lettuce, tomato, aioli, bacon, cheese & tomato chutney, served with a side of beer battered fries'
    },
    'Wallaby Burger': {
        type: 'single',
        variations: [],
        description: 'Tender Tassie smoky marinated wallaby fillet, lettuce, tomato, caramelised onion & tomato chutney, served with a side of beer battered fries'
    },
    'Moroccan Chickpea Burger': {
        type: 'single',
        variations: [],
        description: 'Grilled chickpea burger with smashed avocado, tomato, lettuce & tomato chutney, served with a side of beer battered fries'
    },
    'Fish of the Day': {
        type: 'single',
        variations: [],
        description: 'See our Specials Board for the latest Aquatic Extravaganza or ask any of the Cascade Team'
    },
    'Subterranean Pie': {
        type: 'multi',
        variations: [
            { name: 'Size', options: ['Small', 'Large'] },
        ],
        description: 'Twice cooked rabbit braised in a rich sauce served with creamy mash & braised black lentils'
    },
    'Roast of the Day': {
        type: 'multi',
        variations: [
            { name: 'Size', options: ['Small', 'Large'] },
        ],
        description: 'See our Specials Board'
    },
    'Chicken Parma': {
        type: 'multi',
        variations: [
            { name: 'Size', options: ['Small', 'Large'] },
            { name: 'Sides', options: ['Chips & Salad', 'Veggies'] }
        ],
        description: 'Free Range chicken breast served crumbed or pan-fried (gf) with house-made Napoli sauce, ham & mozzarella, served with salad & beer battered fries, or seasonal vegetables'
    },
    'Chicken Snitzel': {
        type: 'multi',
        variations: [
            { name: 'Size', options: ['Small', 'Large'] },
            { name: 'Sides', options: ['Chips & Salad', 'Veggies'] },
            { name: 'Sauce', options: ['Gravy', 'Mushroom', 'Pepper'] }
        ],
        description: 'Free Range chicken breast served crumbed or pan-fried (gf) with salad & beer battered fries, or seasonal vegetables & your choice of sauce'
    },
    'Siceys Super Beef Snitzel': {
        type: 'multi',
        variations: [
            { name: 'Size', options: ['Small', 'Large'] },
            { name: 'Sides', options: ['Chips & Salad', 'Veggies'] },
            { name: 'Sauce', options: ['Gravy', 'Mushroom', 'Pepper'] }
        ],
        description: 'Free Range chicken breast served crumbed or pan-fried (gf) with salad & beer battered fries, or seasonal vegetables & your choice of sauce'
    },
    'Bowl of chips': {
        type: 'multi',
        variations: [
            { name: 'Size', options: ['Small', 'Large'] },
            { name: 'Sauce', options: ['Gravy', 'Mushroom', 'Pepper', 'Aioli'] }
        ],
        description: 'Bowl of beer battered chips'
    },
    'Choc fudge Brownie': {
        type: 'single',
        variations: [],
        description: 'Can it get any better than this?'
    },
    'Fish & Chips': {
        type: 'multi',
        variations: [
            { name: 'Size', options: ['Small', 'Large'] },
        ],
        description: 'Served with beer battered fries, salad & house-made tartare'
    },
    'Rissoles': {
        type: 'multi',
        variations: [
            { name: 'Size', options: ['Small', 'Large'] },
        ],
        description: 'Served on creamy mash with a rich gravy'
    },
    'Custom Order': {
        type: 'custom',
        description: 'Special requests or custom meals',
        placeholder: 'E.g., Gluten-free pasta, No onions, Extra spicy...'
    }
};

export default meals; 
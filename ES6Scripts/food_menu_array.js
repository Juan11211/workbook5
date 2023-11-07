let menu = [
    [
    {item: "Sausage and Egg Biscuit", price: 3.69},
    {item: "Bacon and Egg Biscuit", price: 3.49},
    {item: "Ham and Egg Biscuit", price: 3.29}
    ],
    [  
        {item: "Miso Soup", price: 7.69},
        {item: "Breakfast Burger w/ fries", price: 15.49},
        {item: "Buffalo Chicken Sandwich", price: 13.29},
        {item: "Lobster Rolls", price: 12.29}

    ],
    [ 
        {item: "Ceaser Salad", price: 10.69},
        {item: "Stew Chicken w/ white rice", price: 11.49},
        {item: "Steak and Fries", price: 17.29},
        {item: "Chicken Alfredo", price: 17.29},
        {item: "Chicken and Waffles", price: 17.29}

    ]
   ];

const meal = Math.floor(Math.random() * 3)


// let heading; 
// if(meal === 0){
//     heading = "BreakFast Items"
// } else if(meal === 1){
//     heading = "Lunch Items"
// } else {
//     heading = "Dinner"
// }

// for(let i = 0; i < menu[meal].length; i++){
//     console.log(`${menu[meal][i].item} - ${menu[meal][i].price} `)
// }

// Define a function to display a menu item
function displayMenuItem(item) {
    console.log(`${item.item}: $${item.price}`);
}

// Display the heading based on the meal
let heading;
if (meal === 0) {
    heading = "Breakfast Menu";
} else if (meal === 1) {
    heading = "Lunch Menu";
} else {
    heading = "Dinner Menu";
}

// Display the heading
console.log(heading);

// Use forEach to display the menu items for the selected meal
menu[meal].forEach(displayMenuItem);
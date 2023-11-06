"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Jolly Rancher", price: 2.00},
    {product: "Starburst", price: 3.50},
    {product: "Candy Apple", price: 2.79},
    {product: "Chocolate Strawberry", price: 5.39},
    {product: "Dozen of Donuts", price: 10.00},
    {product: "Oreo", price: 4.58},
    ];

    // Which candies costs less than $4.00?

    const cheapCandies = products.filter((cheap) => cheap.price <= 4);

    const results = cheapCandies.map((item) => item.product);

    console.log(`These candies cost less than $4: ${results.join(' ')}`);


    console.log("/////////")

    //2 
    const mmCandies = products.filter((item) => item.product.indexOf("M&Ms") !== -1);

    console.log(mmCandies)

    //3 
    const haveFish = products.find((product) => product.product === "Swedish Fish");
    
    if (haveFish) {
        console.log(`Yes, we carry ${haveFish.product}`);
    } else {
        console.log(`We do not carry Swedish Fish.`);
    }
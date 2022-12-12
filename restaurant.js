const { mongerInventory } = require("./fishMonger.js")


const restaurantCatch = mongerInventory()


const fishMenu = (maxPrice) => {
    let HTMLString = ""
    let fishInventory = []

    for (const fish of restaurantCatch) {
        if (fish.price <= maxPrice) {
            fish.amount = 5
            fishInventory.push(fish)
        }
    }

    for (const fish of fishInventory) {
        HTMLString += `<h1>Menu</h1>\n<article class="menu">\n\t<h2>${fish.species}</h2>\n\t<section class="menu_item">${fish.species} Soup</section>\n\t<section class="menu_item">${fish.species} Sandwich</section>\n\t<section class="menu_item">Grilled ${fish.species}</section>\n</article>\n\n`
    }
    return HTMLString
}


const fishResult = fishMenu(5.00)
console.log(fishResult)
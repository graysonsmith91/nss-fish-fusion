const { boatInventory } = require("./fishingBoat.js")

/* 
    Fishmonger buys 10 of each inexpensive fish. if inventory 
    is less than 10, they do not buy.
*/

const dailyCatch = boatInventory()

const mongerInventory = () => {
    let mongerFishArr = []
    for (const fish of dailyCatch)
        if (fish.amount >= 10 && fish.price <= 7.50) {
            fish.amount = 10
            mongerFishArr.push(fish)
        }

    return mongerFishArr
}


module.exports = { mongerInventory }



/* 
    Fishmonger does not buy fish priced higher than $7.50 per fish.
*/


/* 
    Maximum budget per fish should be changeable, chef can say $5 
    maximum instead and function should only return fish less than $5.
*/


/* 
   Each fish object provided by fishmonger should have quantity of 10
   instead of original quantity from boat.
*/

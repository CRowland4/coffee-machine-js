const input = require('sync-input')

const amountPerCup = {
    water: 200,
    milk: 50,
    beans: 15
}



function main() {
    let machine = {
        water: Number(input("Write how many ml of water the coffee machine has:\n")),
        milk: Number(input("Write how many ml of milk the coffee machine has:\n")),
        beans: Number(input("Write how many grams of coffee beans the coffee machine has:\n")),
    }

    let cupsAvailable = calculateCupsAvailable(machine);
    let cupsRequested = Number(input("Write how many cups of coffee you will need:\n"));
    if (cupsRequested === cupsAvailable) {
        console.log("Yes, I can make that amount of coffee");
    } else if (cupsRequested < cupsAvailable) {
        console.log(`Yes, I can make that amount of coffee (and even ${cupsAvailable - cupsRequested} more than that)`)
    } else {
        console.log(`No, I can make only ${cupsAvailable} cups of coffee`);
    }
}


function calculateCupsAvailable(machine) {
    const cupsWater = Math.floor(machine.water / amountPerCup.water);
    const cupsMilk = Math.floor(machine.milk / amountPerCup.milk);
    const cupsBeans = Math.floor(machine.beans / amountPerCup. beans);

    return Math.min(cupsWater, cupsMilk, cupsBeans);
}

main();
const input = require('sync-input')

const amountPerCup = {
    water: 200,
    milk: 50,
    beans: 15
}


function main() {
    console.log("Write how many cups of coffee you will need:");
    const cups = Number(input());
    console.log(`For ${cups} cups of coffee you will need:`);
    console.log(`${cups * amountPerCup.water} ml of water`);
    console.log(`${cups * amountPerCup.milk} ml of milk`);
    console.log(`${cups * amountPerCup.beans} g of coffee beans`);
}

main();
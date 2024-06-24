const input = require('sync-input')

let machine = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money: 550
}

const drinks = {
    espresso: {
        water: 250,
        beans: 16,
        milk: 0,
        cost: 4
    },
    latte: {
        water: 350,
        milk: 75,
        beans: 20,
        cost: 7
    },
    cappuccino: {
        water: 200,
        milk: 100,
        beans: 12,
        cost: 6
    }
}


function printResources() {
    console.log("The coffee machine has:");
    console.log(`${machine.water} ml of water`);
    console.log(`${machine.milk} ml of milk`);
    console.log(`${machine.beans} g of coffee beans`);
    console.log(`${machine.cups} disposable cups`);
    console.log(`$${machine.money} of money`);
}


function buy() {
    const choice = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n");

    if (choice === "1") {
        machine.cups--;
        machine.water -= drinks.espresso.water;
        machine.milk -= drinks.espresso.milk;
        machine.beans -= drinks.espresso.beans;
        machine.money += drinks.espresso.cost;
    } else if (choice === "2") {
        machine.cups--;
        machine.water -= drinks.latte.water;
        machine.milk -= drinks.latte.milk;
        machine.beans -= drinks.latte.beans;
        machine.money += drinks.latte.cost;
    } else if (choice === "3") {
        machine.cups--;
        machine.water -= drinks.cappuccino.water;
        machine.milk -= drinks.cappuccino.milk;
        machine.beans -= drinks.cappuccino.beans;
        machine.money += drinks.cappuccino.cost;
    }

    return machine
}


function fill() {
    machine.water += Number(input("Write how many ml of water you want to add:\n"));
    machine.milk += Number(input("Write how many ml of milk you want to add:\n"));
    machine.beans += Number(input("Write how many grams of coffee beans you want to add:\n"));
    machine.cups += Number(input("Write how many disposable cups you want to add:\n"));
}


function take() {
    console.log(`I gave you $${machine.money}`);
    machine.money = 0;
}


function main() {
    printResources();

    let action = input("Write action (buy, fill, take):\n");
    switch (action) {
        case "buy":
            machine = buy();
            printResources();
            break;
        case "fill":
            fill();
            printResources();
            break;
        case "take":
            take();
            printResources();
            break;
    }
}

main();
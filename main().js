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
    },
    americano: {
        water: 150,
        milk: 25,
        beans: 6,
        cost: 3
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


function hasEnoughResources(choice) {
    let drink = drinks.latte;
    if (choice === "1") {
        drink = drinks.espresso;
    } else if (choice === "2") {
        drink = drinks.latte;
    } else if (choice === "3") {
        drink = drinks.cappuccino;
    } else if (choice === "4") {
        drink = drinks.americano;
    }

    if (machine.water < drink.water) {
        console.log("Sorry, not enough water!");
        return false;
    } else if (machine.milk < drink.milk) {
        console.log("Sorry, not enough milk!");
        return false;
    } else if (machine.beans < drink.beans) {
        console.log("Sorry, not enough coffee beans!");
        return false;
    } else if (machine.cups < 1) {
        console.log("Sorry, not enough disposable cups!");
        return false;
    } else {
        console.log("I have enough resources, making you a coffee!");
        return true
    }
}


function buy() {
    const choice = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - americano:\n");
    if (!hasEnoughResources(choice)) {
        return
    }

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
    } else if (choice === "4") {
        machine.cups--;
        machine.water -= drinks.americano.water;
        machine.milk -= drinks.americano.milk;
        machine.beans -= drinks.americano.beans;
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
    while (true) {
        let action = input("Write action (buy, fill, take, remaining, exit):\n");
        switch (action) {
            case "buy":
                buy();
                break;
            case "fill":
                fill();
                break;
            case "take":
                take();
                break;
            case "remaining":
                printResources();
                break;
            case "exit":
                return
        }
        console.log();
    }
}

main();
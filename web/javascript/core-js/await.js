/**
 * Write a function, placeOrder, that uses async/await to place an order
 * for a drink and a pizza. When it's complete, execute callback().
 *
 * These functions already exist for you:
 *
 * pizzaLib.getPizzaData() - returns a Promise that resolves with pizzaData
 * pizzaLib.getDrinkData() - returns a Promise that resolves with drinkData
 * pizzaLib.choosePizza(pizzaData) - returns a pizza
 * pizzaLib.chooseDrink(drinkData) - returns a drink
 * pizzaLib.orderPizza(pizza) - returns a Promise that resolves when successful
 * pizzaLib.orderDrink(drink) - returns a Promise that resolves when successful
 */

async function placeOrder(callback) {
    const pizzaData = await pizzaLib.getPizzaData();
    /*    TODO
     *  - Mark this function as asynchronous
     *  - Get drink data
     *  - Choose a pizza
     *  - Choose a drink
     *  - Order a pizza
     *  - Order a drink
     */

    const drinkData = await pizzaLib.getDrinkData();

    const pizza = pizzaLib.choosePizza(pizzaData);
    const drink = pizzaLib.chooseDrink(drinkData);

    await pizzaLib.orderPizza(pizza);
    await pizzaLib.orderDrink(drink);

    callback();
}

async function placeOrder(callback) {
    const pizzaPromise = orderPizza();
    const drinkPromise = orderDrink();

    await pizzaPromise;
    await drinkPromise;

    callback();
}

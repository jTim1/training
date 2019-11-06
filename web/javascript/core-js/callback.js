/**
 * Write a function, placeOrder, that uses callbacks to place an order
 * for a drink and a pizza. When it's complete, execute callback().
 *
 * These functions already exist for you:
 *
 * pizzaLib.getPizzaData(callback) - callback is executed with pizzaData
 * pizzaLib.getDrinkData(callback) - callback is executed with drinkData
 * pizzaLib.choosePizza(pizzaData) - returns a pizza
 * pizzaLib.chooseDrink(drinkData) - returns a drink
 * pizzaLib.orderPizza(pizza, callback) - callback is executed when successful
 * pizzaLib.orderDrink(drink, callback) - callback is executed when successful
 */

function placeOrder(callback) {
    pizzaLib.getPizzaData((pizzaData) => {
        /*    TODO
         *  - Get drink data
         *  - Choose a pizza
         *  - Choose a drink
         *  - Order a pizza
         *  - Order a drink
         *  - Execute callback()
         */

        pizzaLib.getDrinkData((drinkData) => {
            const pizza = pizzaLib.choosePizza(pizzaData);
            const drink = pizzaLib.chooseDrink(drinkData);

            pizzaLib.orderPizza(pizza, () => {

                pizzaLib.orderDrink(drink, () => {
                    callback();
                });

                /*
                  pizzaLib.orderDrink(drink, callback);
                */
            });

        });

    });

}

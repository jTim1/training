/**
 * Write a function, placeOrder, that uses promises to place an order
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

function placeOrder(callback) {
    // It might be helpful to store your selections here
    let pizza = '';
    let drink = '';

    pizzaLib.getPizzaData()
        .then((pizzaData) => {
            /*    TODO
             *  - Choose a pizza
             *  - Get drink data
             *  - Choose a drink
             *  - Order a pizza
             *  - Order a drink
             *  - Execute callback()
             */
            pizza = pizzaLib.choosePizza(pizzaData);
            return pizzaLib.getDrinkData();
        })
        .then((drinkData) => {
            drink = pizzaLib.chooseDrink(drinkData);
            return pizzaLib.orderPizza(pizza);
        })
        .then(() => {
            return pizzaLib.orderDrink(drink);
        })
        .then(callback);
}



/*const promise = fetch('api');
promise.then(
    (response)=> {
        //got the response
    }
);

fetch('api')
.then((response) => {
   return response.json();
})
.then((json) => {
    console.log(json);
});

function placeOrder(callback) {

    const pizzaOrder = orderPizza();
    const drinkOrder = orderDrink();

    return Promise.all([pizzaOrder, drinkOrder])
        .then(() => {
            callback();
        }
    );
}
 */



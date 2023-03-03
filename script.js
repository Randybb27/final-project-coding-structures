var FormButton = document.getElementById("btn")
// Global variables

// toppings array
// event listener
btn.addEventListener("click", showbtn);

function showbtn(event) {
    event.preventDefault()
    let topping = [];
    var topping1 = document.getElementById("topping 1").value;
    var topping2 = document.getElementById("topping 2").value;
    var topping3 = document.getElementById("topping 3").value;
    topping.push(topping1, topping2, topping3);
    console.log(topping1)
    calculateTotal(topping);
    var crust = document.getElementById("crust").value;
    var sauce = document.getElementById("sauce").value;
    let pizzaOrder = ` ${crust} with ${sauce}`;
    document.getElementById("pizzaOrder").innerHTML=pizzaOrder;
}
function calculateTotal(topping) {
    let toppingCost = 2.50;
    let baseCost = 5.50;
    let total = baseCost;
    let toppingString = "Toppings:";
    console.log(topping)
    let result = 0;
    for (let i = 0; i < topping.length; i++) {
        if (topping[i] != "") {
            toppingString += ` ${topping[i]}`;
            total += toppingCost;
            console.log(toppingString)
        }

    }
document.getElementById("toppings").innerHTML=toppingString;
document.getElementById("total").innerHTML=total;

}
{
    // cost of crust and sauce

    // order string concatenation
    let orderString = "Original Crust pizza with Classic Tomato sauce"; "Original Crust pizza with spicy marinara"; "Original Crust pizza with white garlic sauce"; "Thin Crust pizza with classic tomato sauce"; "Thin Crust pizza with spicy marinara sauce"; "Thin Crust pizza with white garlic sauce."


    // For Loop
    // total = baseCost + cost of all toppings

    // set DOM total += total   
    // use DOM: = orderString   
    // use DOM: = toppingString 
}
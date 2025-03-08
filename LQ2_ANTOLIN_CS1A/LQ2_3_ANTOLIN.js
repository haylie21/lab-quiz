console.log("Price Inquiry: Choose an item");
console.log("A. Pepsi");
console.log("B. Coca Cola");
console.log("C. Apple (per kg)");
console.log("D. Orange (per kg)");
console.log("E. Hotdogs (per kg)");

let item_choice = prompt("Enter the letter of your choosen item (A-E):").toUpperCase();
let quantity = parseInt(prompt("Enter the quantity to order:"), 10);
let total_price = 0;

switch (item_choice) {
    case "A":
        total_price = quantity * 10; 
        alert(`The Total Price of the order Pepsi x ${quantity}: ${total_price}`);
        break;
    case "B":
        total_price = quantity * 20; 
        alert(`The Total Price of the order Coca Cola x ${quantity}: ${total_price}`);
        break;
    case "C":
        total_price = quantity * 25; 
        alert(`The Total Price of the order Apple x ${quantity}: ${total_price}`);
        break;
    case "D":
        total_price = quantity * 30; 
        alert(`The Total Price of the order Orange x ${quantity}: ${total_price}`);
        break;
    case "E":
        total_price = quantity * 200; 
        alert(`The Total Price of the order Hotdogs x ${quantity}: ${total_price}`);
        break;
    default:
        alert("No matching item! Try to re-run the program.");
}

let createMatrix = prompt("Do you want to create a matrix? (yes/no):");

if (createMatrix.toLowerCase() === "yes") {
    // ask the limit for the nested loops
    let limit1 = parseInt(prompt("Enter the first limit (outer loop):"));
    let limit2 = parseInt(prompt("Enter the second limit (middle loop):"));
    let limit3 = parseInt(prompt("Enter the third limit (inner loop):"));

    // get the strings
    let symbol1 = prompt("Enter a word:");
    let symbol2 = prompt("Enter a symbol (e.g., @, #, *):");
    let symbol3 = prompt("Enter a character or number:");

    // creating the matrix
    console.log("Generated Matrix:");
    for (let i = 0; i < limit1; i++) {
        for (let j = 0; j < limit2; j++) {
            let row = "";
            for (let k = 0; k < limit3; k++) {

                if (k % 3 === 0) {
                    row += symbol1 + " ";
                } else if (k % 3 === 1) {
                    row += symbol2 + " ";
                } else {
                    row += symbol3 + " ";
                }
            }
            console.log(row);
        }
        console.log("\n"); 
    }
} else {
    console.log("Thank you, re-run the program if you change your mind.");
}


// pass event listener to queryselector
const generateBtn = document.querySelector("#generate");



// const collection = {
//     numb: getRandomNumber,
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     special: getRandomSymbol
// };

// Add event listener to generate button
generateBtn.addEventListener("click", makePassword)


//  pass query selector to password generating questions

function makePassword() {
   var char = parseInt(prompt("how many characters do you want in your password? choose between 8 and 30")) 
        if (!char) {
            alert("you have to enter something!")
        }
        else if (char < 8 || char > 30) {
            alert("pick between 8 and 30")
        }
        else if (char >= 8 || char <= 30) { 
    var numb = confirm("do you want numbers?")
    var upper = confirm("do you want uppercase?")
    var lower = confirm("do you want lowercase?")
    var special = confirm("do you want special characters?")
 
        }
   numbersGenerator(char, numb, upper, lower, special)
    };
 
     
 function numbersGenerator(char, numb, uppper, lower, special) {
    return
 }
    //  1. pass what user said yes to to generator functions ... maybe if === true statements?
    //  2. pass generator results to password output box

  
//   pass what user entered to the Generator Functions


function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*()+/'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

    
    function insertPassword(char, numb, upper, lower, special) {
        
    }















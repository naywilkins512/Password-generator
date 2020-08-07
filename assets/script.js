
// pass event listener to queryselector
const generateBtn = document.querySelector("#generate");


const collection = {
    numb: getRandomNumber,
    lower: getRandomLower,
    upper: getRandomUpper,
    special: getRandomSymbol
};

// event listener for generate button
generateBtn.addEventListener("click", makePassword)


//  password generating questions

function makePassword() {
    var char = parseInt(prompt("how many characters do you want in your password? choose between 8 and 128"))
    if (!char) {
        alert("you have to enter something!");
        makePassword()
    }
    else if (char < 8 || char > 128) {
        alert("pick between 8 and 128");
        makePassword()
    }
    else if (char >= 8 || char <= 128) {
        var numb = confirm("do you want numbers?")
        var upper = confirm("do you want uppercase?")
        var lower = confirm("do you want lowercase?")
        var special = confirm("do you want special characters?")

    }
    if (!numb && !upper && !lower && !special) {
        alert("pick at least one variable");
        makePassword()
    }
    var passwordStorage = numbersGenerator(char, numb, upper, lower, special)
    insertPassword(passwordStorage)
};


function numbersGenerator(char, numb, upper, lower, special) {
    charSelection = [];
    if (numb) {
        charSelection.push("numb")
    }
    if (upper) {
        charSelection.push("upper")
    }
    if (lower) {
        charSelection.push("lower")
    }
    if (special) {
        charSelection.push("special")
    }
    var passwordHolder = ''
    for (i = 0; i < char; i++) {
        var randomCharType = charSelection[Math.floor(Math.random() * charSelection.length)]

        var randomCharacter = collection[randomCharType]()

        passwordHolder = passwordHolder.concat(randomCharacter)
        console.log(passwordHolder)
    }

    return passwordHolder


};





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


function insertPassword(pwd) {
    document.querySelector("textarea").textContent = pwd
}















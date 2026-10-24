const words = [
    "Harry Styles",
    "Lana del Rey",
    "One Direction",
    "Adele",
    "Billie Eilish",
    "Tame Impala",
    "Malcolm Todd",
    "Olivia Rodrigo",
    "Charlie Puth",
    "Laufey",
];

const hints = [
    "Sign of the Times",
    "Summertime Sadness",
    "History",
    "Skyfall",
    "ocean eyes",
    "Loser",
    "Earrings",
    "deja vu",
    "Attention",
    "Falling Behind",
];

let displayWord = "";

function scramble(str) {
    strArray = Array.from(str);
    for (let i = 0; i < strArray.length - 1; ++i) {
        let j = Math.floor(Math.random() * strArray.length);
        let temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
    }
    return strArray.join(" ");
}

function check() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    if (
        input.value.toLocaleLowerCase() ===
        displayWord.toLocaleLowerCase()
    )
        output.innerHTML = "Result: Correct";
    else output.innerHTML = "Result: Incorrect";
}

function refresh() {
    index = Math.floor(Math.random() * 5);
    displayWord = words[index];
    displayHint = hints[index];
    scrambleWord = 
        document.getElementById("scrambleWord");
    scrambleWord.innerText =
        scramble(displayWord).toUpperCase();
    let hint = document.getElementById("hint");
    hint.innerHTML = "<b>Hint:</b> " + displayHint;
    document.getElementById("output").innerText = "Result:";
}

refresh();
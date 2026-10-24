var displayField = document.getElementById('display');

function appendValue(buttonInput) {
    displayField.value = displayField.value + buttonInput;
}

function clearScreen() {
    displayField.value = "";
}

function calculateResult() {
    try {
        if (displayField.value != "") {
            displayField.value = eval(displayField.value);
        }
    } catch (error) {
        displayField.value = "Error";
    }
}
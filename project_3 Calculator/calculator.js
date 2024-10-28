// Get the input and output display elements
const inputDisplay = document.getElementById('input');
const outputDisplay = document.getElementById('output');

// Variables to store the input values
let input = '';
let output = '0';

// Get all buttons and add event listeners
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        // If 'C' is pressed, clear the input and output
        if (value === 'C') {
            input = '';
            output = '0';
        }
        // If '=' is pressed, evaluate the expression
        else if (value === '=') {
            try {
                // Evaluate the input using JavaScript's eval function
                output = eval(input);
                input = '0';
            } catch {
                output = 'Error';
            }
        }
        // If an operator or number is pressed, add it to the input
        else {
            input += value;
        }

        // Update the display
        inputDisplay.textContent = input;
        outputDisplay.textContent = output;
    });
});

Digital Clock Project

This project creates a simple digital clock with the following features:

    Displays hours, minutes, and seconds
    Toggles between 12-hour and 24-hour format
    Shows AM/PM indicator in 12-hour format

Getting Started

    Clone this repository or download the zip file.
    Open the index.html file in your web browser.

Dependencies

This project uses the following external resources:

    CSS font: Poppins from Google Fonts (https://fonts.google.com/specimen/Poppins)

Note: You can either download the Poppins font locally or keep the link in the @import statement within the CSS file.
Running the Project

There's no additional setup required. Simply open the index.html file in a web browser to see the digital clock running.
Project Structure

    index.html: Main HTML file for the clock interface
    digitalClockCssStyle.css: Stylesheet for the clock design
    digitalClockJavaScript.js: JavaScript code to update the clock and handle user interaction

How it Works

The HTML file defines the basic structure of the clock interface, including elements for displaying the hours, minutes, seconds, AM/PM indicator, and toggle buttons for the time format.

The CSS stylesheet provides visual styling for the clock elements.

The JavaScript code performs the following tasks:

    Obtains references to the necessary HTML elements
    Updates the clock display (hours, minutes, seconds) every second using setInterval
    Handles user interaction with the 12-hour and 24-hour format toggle buttons

Contributing

Feel free to fork this repository and make your own modifications to the code. You can add features like date display, alarms, or a different design.
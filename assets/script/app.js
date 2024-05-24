'use strict';

function isNumber(str) {
    return str.length > 0 && !isNaN(str);
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function convertTemperature() {
    const temperatureInput = document.getElementById('temperature-input');
    const toFahrenheit = document.getElementById('to-fahrenheit');
    const toCelsius = document.getElementById('to-celsius');
    const output = document.getElementById('result-text');
    const temp = temperatureInput.value.trim();

    if (isNumber(temp)) {
        let result;
        const parsedTemp = parseFloat(temp);

        if (toFahrenheit.checked) {
            result = celsiusToFahrenheit(parsedTemp);
            output.innerText = `${parsedTemp}°C = ${result.toFixed(2)}°F`;
        } else if (toCelsius.checked) {
            result = fahrenheitToCelsius(parsedTemp);
            output.innerText = `${parsedTemp}°F = ${result.toFixed(2)}°C`;
        }
        temperatureInput.value = '';
    } else {
        output.innerText = 'Please enter a valid temperature';
    }
}

function toggleTheme() {
    const body = document.body;
    const modeToggle = document.getElementById('mode-toggle');
    const titleText = document.getElementById('title-text');
    const temperatureInput = document.getElementById('temperature-input');

    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
        titleText.style.color = '#fff';
        modeToggle.innerText = 'Light mode';
        modeToggle.style.color = '#181720';
        modeToggle.style.background = '#fff';
        temperatureInput.style.background = '#181720';
        temperatureInput.style.color = '#fff';
    } else {
        titleText.style.color = 'inherit';
        modeToggle.innerText = 'Dark mode';
        modeToggle.style.color = '#fff';
        modeToggle.style.background = '#181720';
        temperatureInput.style.background = '#fff';
        temperatureInput.style.color = '#181720';
    }
}

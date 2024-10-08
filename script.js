function calculate() {
    const input = document.getElementById('calcInput').value;
    try {
        const result = eval(input);
        document.getElementById('calcResult').innerText = `Result: ${result}`;
    } catch (error) {
        document.getElementById('calcResult').innerText = 'Error: Invalid Expression';
    }
}

function convertUnit() {
    const value = parseFloat(document.getElementById('unitInput').value);
    const unit = document.getElementById('unitSelect').value;
    let result;

    if (unit === "m-to-km") {
        result = value / 1000;
        document.getElementById('conversionResult').innerText = `${value} meters = ${result} kilometers`;
    } else if (unit === "km-to-m") {
        result = value * 1000;
        document.getElementById('conversionResult').innerText = `${value} kilometers = ${result} meters`;
    } else {
        document.getElementById('conversionResult').innerText = 'Invalid unit';
    }
}

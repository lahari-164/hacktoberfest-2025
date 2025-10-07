let resultField = document.getElementById('result');

function appendValue(val) {
    resultField.value += val;
}

function clearResult() {
    resultField.value = '';
}

function calculate() {
    try {
        resultField.value = eval(resultField.value);
    } catch (e) {
        resultField.value = 'Error';
    }
}

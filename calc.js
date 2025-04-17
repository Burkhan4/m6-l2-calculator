let inputText = '';
function btnClicked (txt) {
    const operators = ['+', '-', '*', '/'];

    if (inputText.length === 0 && operators.includes(txt)) {
        return;
    }

    const lastChar = inputText.charAt(inputText.length - 1);
    if (operators.includes(lastChar) && operators.includes(txt)) {
        return;
    }

    if (inputText.length == 0 && (txt == '+' || txt == '-' || txt == '*' || txt == '/')) {
    } else if (txt !== 'C' && txt !== '=') {
        inputText += txt;
        document.getElementsByTagName('input')[0].value = inputText;
    } else if (txt === '=') {
        let x = inputText;
        document.getElementsByTagName('input')[0].value = eval(x);
        inputText = '';
    } else if (txt == 'C') {
        document.getElementsByTagName('input')[0].value = 0;
    }
}
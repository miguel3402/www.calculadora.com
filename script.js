// Função para exibir a calculadora quando o botão "Entrar" for pressionado
document.getElementById('loginBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Verifica se ambos os campos estão preenchidos
    if (email && password) {
        // Exibe a calculadora
        document.getElementById('calculatorContainer').style.display = 'block';
        document.querySelector('.login-box').style.display = 'none';
    } else {
        alert("Por favor, preencha o email e a senha!");
    }
});

// Funções da calculadora
let currentInput = '';

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    document.getElementById('display').textContent = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    document.getElementById('display').textContent = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').textContent = currentInput;
    } catch (error) {
        currentInput = 'Erro';
        document.getElementById('display').textContent = currentInput;
    }
}

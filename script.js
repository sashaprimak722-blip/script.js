// 1. Генерируем случайное число от 1 до 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// 2. Считаем попытки
let attemptsCount = 0;

// 3. Находим наши элементы на странице
const input = document.getElementById('guessInput');
const button = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

// 4. Функция, которая срабатывает при нажатии на кнопку "Проверить"
function checkGuess() {
    // Получаем число, которое ввел пользователь
    const userGuess = parseInt(input.value);
    
    // Если поле пустое или введено что-то не то
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Пожалуйста, введи число от 1 до 100!";
        message.style.color = "red";
        return;
    }

    // Увеличиваем счетчик попыток
    attemptsCount++;
    attemptsDisplay.textContent = `Попыток: ${attemptsCount}`;

    // Проверяем, угадал ли пользователь
    if (userGuess === secretNumber) {
        message.textContent = `🎉 Победа! Ты угадал число ${secretNumber} за ${attemptsCount} попыток!`;
        message.style.color = "#2ecc71"; // Зеленый
        button.disabled = true; // Отключаем кнопку, чтобы игра не продолжалась
        input.disabled = true;
    } else if (userGuess < secretNumber) {
        message.textContent = "📉 Моё число больше!";
        message.style.color = "#f39c12"; // Оранжевый
    } else {
        message.textContent = "📈 Моё число меньше!";
        message.style.color = "#f39c12";
    }

    // Очищаем поле ввода для следующего хода
    input.value = '';
    input.focus();
}

// 5. Привязываем функцию к кнопке
button.addEventListener('click', checkGuess);

// 6. Дополнительно: чтобы можно было нажимать Enter вместо кнопки
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

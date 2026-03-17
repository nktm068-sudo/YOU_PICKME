const container = document.getElementById('container');
const delayBetweenWords = 50; // Задержка между появлениями слов (в мс)

function createWordElement() {
    const word = document.createElement('div');
    word.className = 'word';
    word.textContent = 'ТЫ ПИКМИ!!:P';
    return word;
}

// Генерируем 100 слов с задержкой
for (let i = 0; i < 100; i++) {
    const wordElement = createWordElement();
    container.appendChild(wordElement);

    // Добавляем задержку для плавного появления
    setTimeout(() => {
        wordElement.style.animationDelay = `${i * delayBetweenWords}ms`;
    }, 0);
}

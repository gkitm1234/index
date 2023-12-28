const imagePaths = ['zdjecie1.jpg', 'zdjecie5.jpg', 'images/zdjecie2.jpg', 'images/zdjecie3.jpg', 'images/zdjecie4.jpg'];
let currentImageIndex = 0;

function changeImage() {
    const image = document.getElementById('image');

    // Zmiana obrazu na kolejny w tablicy
    image.src = imagePaths[currentImageIndex];

    // Zwiększenie indeksu, jeśli to ostatni obraz, wróć do pierwszego
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
}

function moveButton() {
    const button = document.getElementById('no-button');
    // Tutaj dodaj kod przesuwania przycisku "Nie" po kliknięciu
    button.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
    button.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
}

function createSnow() {
    const numberOfSnowflakes = 100;
    const snowContainer = document.getElementById('snow-container');

    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake(snowContainer);
    }
}

function createSnowflake(container) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    container.appendChild(snowflake);

    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    const randomAnimationDuration = 5 + Math.random() * 5;

    snowflake.style.left = randomX + 'px';
    snowflake.style.top = randomY + 'px';
    snowflake.style.animationDuration = randomAnimationDuration + 's';

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

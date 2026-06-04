const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainScreen = document.getElementById('mainScreen');
const successScreen = document.getElementById('success');

// No button dodging
function moveNoButton() {
    const maxX = window.innerWidth - 180;
    const maxY = window.innerHeight - 120;
    
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

// Yes button
yesBtn.addEventListener('click', () => {
    mainScreen.style.display = 'none';
    successScreen.style.display = 'flex';
});

// Floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = ['❤️','💖','💕','💘','✨'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 6 + 7) + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 15000);
}

setInterval(createHeart, 400);
const startScreen = document.querySelector('.start-screen');
const startBtn = document.querySelector('.start-btn');
const rocket = document.querySelector('.rocket');
const content = document.querySelector('.content');
const sections = document.querySelectorAll('.section');
const funFacts = document.querySelectorAll('.fun-fact');

// Создание звездного фона
function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);

    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        starsContainer.appendChild(star);
    }
}

// Запуск истории
startBtn.addEventListener('click', () => {
    startScreen.style.opacity = '0';
    setTimeout(() => {
        startScreen.style.display = 'none';
        rocket.style.opacity = '1';
        content.style.opacity = '1';
    }, 1000);
});

// Прокрутка страницы
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;



    // Анимация для секций
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY > sectionTop - windowHeight / 2) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    // Показываем плашки с интересными фактами
    funFacts.forEach((fact, index) => {
        const section = fact.closest('.section');
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY > sectionTop - windowHeight / 2 && scrollY < sectionTop + sectionHeight - windowHeight / 2) {
            fact.classList.add('active');
        } else {
            fact.classList.remove('active');
        }
    });
});

// Инициализация звезд
createStars();
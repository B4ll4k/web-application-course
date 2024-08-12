document.getElementById('startButton').addEventListener('click', function () {
    const width = parseInt(document.getElementById('width').value);
    const growthAmount = parseInt(document.getElementById('growthAmount').value);
    const growRate = parseInt(document.getElementById('growRate').value);
    const numberCircles = parseInt(document.getElementById('numberCircles').value);

    const container = document.getElementById('circleContainer');
    container.innerHTML = ''; // Clear any existing circles

    for (let i = 0; i < numberCircles; i++) {
        createCircle(container, width, growthAmount, growRate);
    }
});

function createCircle(container, width, growthAmount, growRate) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.width = width + 'px';
    circle.style.height = width + 'px';
    circle.style.backgroundColor = getRandomColor();
    circle.style.left = Math.random() * (window.innerWidth - width) + 'px';
    circle.style.top = Math.random() * (window.innerHeight - width) + 'px';

    container.appendChild(circle);

    const intervalId = setInterval(() => {
        const currentWidth = parseInt(circle.style.width);
        circle.style.width = (currentWidth + growthAmount) + 'px';
        circle.style.height = (currentWidth + growthAmount) + 'px';
    }, growRate);

    circle.addEventListener('click', function () {
        clearInterval(intervalId);
        container.removeChild(circle);
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

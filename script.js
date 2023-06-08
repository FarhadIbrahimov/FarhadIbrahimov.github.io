let isRotating = true;
let currentSide = 0;

function toggleRotation() {
    isRotating = !isRotating;
}

function stopRotation() {
    isRotating = false;
}

function startRotation() {
    isRotating = true;
}

function changeSide() {
    currentSide = (currentSide + 1) % 6;
    let cube = document.querySelector('.cube');
    cube.style.transform = `rotateX(${currentSide * 90}deg) rotateY(${currentSide * 90}deg)`;
}

function rotateCube() {
    if (isRotating) {
        let cube = document.querySelector('.cube');
        cube.style.transform += ` rotateX(0.5deg) rotateY(0.5deg)`;
    }
}

setInterval(rotateCube, 10);

let animation = document.getElementById('animation');
animation.addEventListener('mouseenter', stopRotation);
animation.addEventListener('mouseleave', startRotation);

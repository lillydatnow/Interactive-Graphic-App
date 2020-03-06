let ball = document.getElementById("ball");
let container = document.getElementById("container");
let dog = document.getElementById("dog");

container.addEventListener("click", moveBall);

function moveBall(event) {
    let xPosition = event.clientX - container.getBoundingClientRect().left - (ball.clientWidth / 2);
    let yPosition = event.clientY - container.getBoundingClientRect().top - (ball.clientHeight / 2);
    ball.style.left = xPosition + 15 + "px";
    ball.style.top = yPosition + 5 + "px";
}

window.addEventListener("keypress", moveDog);

function moveDog() {
    var xPosition = parseInt(ball.style.left);
    var yPosition = parseInt(ball.style.top);
    xPosition -= 500;
    yPosition -= 20;
    dog.style.left = xPosition + "px";
    dog.style.top = yPosition + "px";
}

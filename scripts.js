let ball = document.getElementById("ball");
let container = document.getElementById("container");
let dog = document.getElementById("dog");

container.addEventListener("click", moveBall);

function moveBall(event) {
    let xPosition = event.clientX - container.getBoundingClientRect().left - (ball.clientWidth / 2);
    let yPosition = event.clientY - container.getBoundingClientRect().top - (ball.clientHeight / 2);
    // in case of a wide border, the boarder-width needs to be considered in the formula above
    ball.style.left = xPosition + 15 + "px";
    ball.style.top = yPosition + 5 + "px";
}

container.addEventListener("keypress", moveDog);

function moveDog() {
    let xPosition = ball.style.left;
    let yPosition = ball.style.top;
    dog.style.left = xPosition + "px";
    dog.style.top = yPosition + "px";
}

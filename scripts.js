let ball = document.getElementById("ball");
let container = document.getElementById("container");

container.addEventListener("click", moveThing);

function moveThing(event) {
    let xPosition = event.clientX - container.getBoundingClientRect().left - (ball.clientWidth / 2);
    let yPosition = event.clientY - container.getBoundingClientRect().top - (ball.clientHeight / 2);
    // in case of a wide border, the boarder-width needs to be considered in the formula above
    ball.style.left = xPosition + "px";
    ball.style.top = yPosition + "px";
}

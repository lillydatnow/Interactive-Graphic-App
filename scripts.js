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

window.addEventListener("keypress", moveDog);

function moveDog() {
    let xPosition = event.clientX;
    let yPosition = event.clientY;
    dog.style.left = xPosition + "px";
    dog.style.top = yPosition + "px";
}

container.addEventListener('dblclick', changeBallColor);

function changeBallColor() {
  let color = ball.style.fill;
  if(color == "limegreen") {
    ball.style.fill = "blue";
  } else {
    ball.style.fill = "limegreen";
  }
}

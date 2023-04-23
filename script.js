const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", showBoxes);

showBoxes();

function showBoxes() {
    const triggerPoint = window.innerHeight * 0.9;
    console.log(triggerPoint);

  boxes.forEach((box) => {
    const top = box.getBoundingClientRect().top;
    if (top < triggerPoint) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

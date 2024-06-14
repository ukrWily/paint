document.querySelectorAll(".color").forEach((item) => {
  item.style.backgroundColor = item.getAttribute("data-color");
});

const canvas = document.querySelector("#canvas");
let painting = false;

function stopPainting () {
  painting = false;
};

function onMouseMove(event) {
  let x = event.offsetX;
  let y = event.offsetY;
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}


if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseUp", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting;
}

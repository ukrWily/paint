window.addEventListener("DOMContentLoaded", () => {
  function stopPainting() {
    painting = false;
  }

  function startPainting() {
    painting = true;
  }

  function onMouseMove(event) {
    let x = event.offsetX;
    let y = event.offsetY;

    if (!painting) {
      /**
       * when do not draw,
       * watching for the cursor
       */
      ctx.beginPath();
      /**
       * and move dot to the cursor
       */
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
      /**
       * візуалізуємо лінію
       */
      ctx.stroke();
    }
  }

  function onMouseDown(event) {
    painting = true;
  }

  function changeColor(event) {
    const color = event.target.getAttribute("data-color");
    ctx.strokeStyle = color;
    rangeLine.style.backgroundColor = color;
    mode.style.backgroundColor = color;
    ctx.fillStyle = color;
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function handleMode() {
    if (filling) {
      filling = false;
      mode.innerText = "Drawing";
      mode.classList.remove("oval");
      mode.classList.add("rectangle");
    } else {
      filling = true;
      mode.innerText = "Filling";
      mode.classList.add("oval");
      mode.classList.remove("rectangle");
    }
  }

  function fillingCanvas() {
    if (filling) {
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
  }

  function saveCanvas() {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "Painting from Paint";
    link.click();
  }

  //<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>
  const canvas = document.querySelector("#canvas");
  const rangeLine = document.querySelector(".range-line");
  const mode = document.querySelector(".btn-mode");
  const save = document.querySelector(".btn-save");

  const INITIAL_COLOR = "#2c2c2c";
  const CANVAS_SIZE = 700;
  /**
   * get canvas context
   */
  const ctx = canvas.getContext("2d");

  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  /**
   * set thin of line
   * */
  ctx.lineWidth = 2.5;
  /**
   * set color of line
   */
  ctx.strokeStyle = INITIAL_COLOR;
  ctx.fillStyle = INITIAL_COLOR;

  let painting = false;
  let filling = false;

  const colors = document.querySelectorAll(".color");
  colors.forEach((color) => {
    color.style.backgroundColor = color.getAttribute("data-color");
    color.addEventListener("click", changeColor);
  });

  const thin = document.querySelector(".thin-line > input");

  thin.addEventListener("change", () => {
    const line = thin.value;
    rangeLine.style.height = `${line}px`;
    ctx.lineWidth = line;
    document.querySelector(
      ".thin-line > label"
    ).textContent = `Thin of line - ${line}px`;
  });

  document.querySelector(".btn-clear").addEventListener("click", clearCanvas);
  //<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>

  if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", fillingCanvas);
  }

  mode.addEventListener("click", handleMode);
  save.addEventListener("click", saveCanvas);
});

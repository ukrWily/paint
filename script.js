window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("#canvas");
  /**
   * get canvas context
   */
  const ctx = canvas.getContext("2d");

  canvas.width = 700;
  canvas.height = 700;
  /**
   * set thin of line
   * */
  ctx.lineWidth = 2.5;
  /**
   * set color of line
   */
  ctx.strokeStyle = "#2c2c2c";

  let painting = false;

  const colors = document.querySelectorAll(".color");
  colors.forEach((color) => {
    color.style.backgroundColor = color.getAttribute("data-color");
    color.addEventListener("click", changeColor);
  });

  const thin = document.querySelector(".thin-line > input");

  thin.addEventListener("change", () => {
    const line = thin.value;
    document.querySelector(".range-line").style.height = `${line}px`;
    ctx.lineWidth = line;
    document.querySelector(
      ".thin-line > label"
    ).textContent = `Thin of line - ${line}px`;
  });

  document.querySelector(".btn-clear").addEventListener("click", clearCanvas);
  //<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>

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
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
  }
});

const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
  animate: true,
};

let audio;

const sketch = () => {
  //create html audio element
  audio = document.createElement("audio");
  audio.src = "test.mp3";
  //audio.autoplay= true;
  // audio.play();

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
  };
};

const addListeners = () => {
  window.addEventListener("mouseup", () => {
    if (audio.paused) audio.play();
    else audio.pause();
  });
};

addListeners();

canvasSketch(sketch, settings);

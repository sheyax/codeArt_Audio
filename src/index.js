const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
  animate: true
};

const sketch = () => {
  //create html audio element
  const audio = document.createElement("audio");
  audio.src = "";
  audio.play();

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);

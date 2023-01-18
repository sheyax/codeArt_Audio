const canvasSketch = require("canvas-sketch");

const test = "https://artlist.io/song/108542/maximum";
console.log(test);

const settings = {
  dimensions: [1080, 1080],
  //animate: true,
};

let audio;

const sketch = () => {
  //create html audio element
  // audio = document.createElement("audio");
  // audio.src = "test.mp3";
  audio = new Audio(test);
  //audio.autoplay= true;
  // audio.play();

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
  };
};

const addListeners = () => {
  window.addEventListener("mouseup", () => {
    audio.play();
  });
};

addListeners();

canvasSketch(sketch, settings);

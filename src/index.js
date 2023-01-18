const canvasSketch = require("canvas-sketch");

const test = "./test.mp3";
console.log(test);

const settings = {
  dimensions: [1080, 1080],
  animate: true,
};

let audio;
let audioContext, sourceNode, analyzerNode, audioData;

const sketch = () => {
  //create html audio element

  //audio.autoplay= true;
  // audio.play();

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    //get audioData
    if (!audioContext) return;
    analyzerNode.getFloatFrequencyData(audioData);
  };
};

const addListeners = () => {
  window.addEventListener("mouseup", () => {
    if (!audioContext) createAudio();

    if (audio.paused) audio.play();
    else audio.pause();
  });
};

const createAudio = () => {
  audio = document.createElement("audio");
  audio.src = "./test.mp3";
  console.log(audio.src);

  audioContext = new AudioContext();
  sourceNode = audioContext.createMediaElementSource(audio);
  sourceNode.connect(audioContext.destination);
  analyzerNode = audioContext.createAnalyser();
  sourceNode.connect(analyzerNode);

  audioData = new Float32Array(analyzerNode.frequencyBinCount);
  console.log(audioData.length);
};

addListeners();

canvasSketch(sketch, settings);

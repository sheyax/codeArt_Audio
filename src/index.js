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

    const avg = getAverage(audioData);

    context.save();
    context.translate(width * 0.5, height * 0.5);
    context.lineWidth = 10;
    context.beginPath();
    context.arc(0, 0, Math.abs(avg), 0, Math.PI * 2);
    context.restore();
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
  audio.src = "audio/test.mp3";

  audioContext = new AudioContext();
  sourceNode = audioContext.createMediaElementSource(audio);
  sourceNode.connect(audioContext.destination);
  analyzerNode = audioContext.createAnalyser();
  sourceNode.connect(analyzerNode);

  audioData = new Float32Array(analyzerNode.frequencyBinCount);
  console.log(audioData);
};

const getAverage = (data) => {
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }

  return sum / data.length;
};

addListeners();

canvasSketch(sketch, settings);

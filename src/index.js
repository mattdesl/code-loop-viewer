const { mod } = require('canvas-sketch-util/math');
const loop = document.querySelector('.loop');

const urls = [
  '2018.07.22-16.24.12.mp4',
  '2018.07.22-16.30.23.mp4',
  '2018.07.23-14.27.21.mp4',
  '2018.07.23-14.33.08.mp4',
  '2018.07.23-14.34.19.mp4',
  '2018.07.23-14.36.11.mp4',
  '2018.07.23-14.40.31.mp4',
  '2018.07.27-15.19.39.mp4',
  '2018.08.07-17.39.41.mp4',
  '2018.08.08-11.50.26.mp4',
  '2018.08.08-12.46.25.mp4',
  '2018.08.08-12.47.43.mp4',
  '2018.08.08-13.42.05.mp4'
].map(name => `assets/${name}`);

let idx = 0;
let currentLoop;

set();

const buttons = [
  { query: '.next', step: 1 },
  { query: '.prev', step: -1 }
].map(({ query, step }) => {
  const button = document.querySelector(query);
  button.addEventListener('click', ev => {
    ev.preventDefault();
    relative(step);
  });
  return button;
})

function relative (n) {
  idx = mod(idx + n, urls.length);
  set();
}

function set () {
  if (currentLoop) currentLoop.detach();
  currentLoop = createLoop(urls[idx]);
  currentLoop.attach();
}

function createLoop (url) {
  console.log(url)
  const video = document.createElement('video');
  video.setAttribute('src', url);
  video.setAttribute('loop', true);
  video.setAttribute('autoplay', true);
  video.setAttribute('playsinline', true);
  video.setAttribute('webkit-playsinline', true);
  video.play();

  return {
    video,
    attach: () => {
      if (!video.parentElement) loop.appendChild(video);
    },
    detach: () => {
      if (video.parentElement) video.parentElement.removeChild(video);
    }
  };
}

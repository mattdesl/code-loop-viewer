const { mod } = require('canvas-sketch-util/math');
const padLeft = require('pad-left');

const loop = document.querySelector('.loop');
const isMobile = /(Android|iOS|iPhone|iPod|iPad)/i.test(navigator.userAgent);
if (!isMobile) {
  document.body.className += 'no-touch';
} else {
  document.body.style.maxWidth = 'initial';
  document.body.style.maxHeight = 'initial';
}

const assets = [
  { name: '2018.07.27-15.19.39.mp4' },
  { name: '2018.07.23-14.27.21.mp4' },
  { name: '2018.07.23-14.33.08.mp4' },
  { name: '2018.07.23-14.34.19.mp4' },
  { name: '2018.07.23-14.36.11.mp4' },
  { name: '2018.07.23-14.40.31.mp4' },
  { name: '2018.10.11-17.55.01.mp4', background: '#F5F4F5' },
  { name: '2018.10.11-17.51.01.mp4', background: '#F5F4F5' },
  { name: '2018.10.11-17.57.09.mp4', background: '#F5F4F5' },
  { name: '2018.08.08-13.42.05.mp4', background: 'black', foreground: 'white' },
  { name: '2018.08.07-17.39.41.mp4' },
  { name: '2018.08.08-11.50.26.mp4' },
  { name: '2018.08.08-12.46.25.mp4' },
  { name: '2018.08.08-12.47.43.mp4' },
  { name: '2018.07.22-16.30.23.mp4' },
  { name: '2018.07.22-16.24.12.mp4' },
].map(({ name, background, foreground }) => {
  return {
    name,
    background: background || 'white',
    foreground: foreground || 'black',
    url: `assets/${name}`
  };
});

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
  idx = mod(idx + n, assets.length);
  set();
}

function setColors (bg, fg) {
  document.body.style.background = bg;
  document.body.style.color = fg;
  document.documentElement.style.background = isMobile ? bg : fg;
  Array.from(document.querySelectorAll('button')).forEach(btn => {
    btn.style.color = bg;
    btn.style.background = fg;
  });
}

function set () {
  if (currentLoop) currentLoop.detach();
  const asset = assets[idx];
  console.log(asset.url);
  currentLoop = createLoop(asset);
  currentLoop.attach();
  document.querySelector('.current').textContent = padLeft(String(idx + 1), String(assets.length).length, '0');
  document.querySelector('.total').textContent = String(assets.length);
}

function createLoop (asset) {
  const video = document.createElement('video');
  video.setAttribute('src', asset.url);
  video.setAttribute('loop', true);
  video.setAttribute('preload', 'auto');
  video.setAttribute('playsinline', true);
  video.setAttribute('webkit-playsinline', true);
  video.style.visibility = 'hidden';
  const loader = document.querySelector('.loader');
  let loaded = false;
  let timer = setTimeout(() => {
    if (!loaded) loader.style.visibility = 'visible';
  }, 100);
  let timer2;
  const event = 'canplaythrough';
  const load = () => {
    if (loaded) return;
    loaded = true;
    video.removeEventListener(event, load);
    timer2 = setTimeout(() => {
      loader.style.visibility = 'hidden';
      setColors(asset.background, asset.foreground);
      video.play();
      video.style.visibility = '';
    }, 100);
  };
  video.addEventListener(event, load)
  return {
    video,
    attach: () => {
      if (!video.parentElement) loop.appendChild(video);
    },
    detach: () => {
      if (video.parentElement) video.parentElement.removeChild(video);
      video.setAttribute('src', '');
      video.removeEventListener(event, load);
      clearTimeout(timer);
      if (timer2) clearTimeout(timer2);
    }
  };
}

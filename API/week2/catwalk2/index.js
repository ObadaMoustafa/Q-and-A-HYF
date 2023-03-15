const STEP_INTERVAL_MS = 50;
const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 1000;
const DANCING_CAT_URL =
  "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";

function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function walk(img, startPos, stopPos) {
  let position = startPos;
  while (position < stopPos) {
    img.style.left = `${position}px`;
    position += STEP_SIZE_PX;
    await wait(STEP_INTERVAL_MS);
  }
}

function dance(img) {
  return new Promise((resolve) => {
    const savedImg = img.src;
    img.src = DANCING_CAT_URL;
    setTimeout(() => {
      img.src = savedImg;
      resolve();
    }, DANCE_TIME_MS);
  });
}

async function catWalk() {
  const img = document.querySelector("img");
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  while (true) {
    await walk(img, startPos, centerPos);
    await dance(img);
    await walk(img, centerPos, stopPos);
  }
  // Use async/await syntax to loop the walk and dance functions
}

window.addEventListener("load", catWalk);

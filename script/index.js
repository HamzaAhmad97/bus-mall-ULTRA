/* eslint-disable eqeqeq */
'use strict';

////////////////////////////////////////////////////
//////////////////// Bus Mall New //////////////////
////////////////////////////////////////////////////

let navBtn = document.getElementById('navBtn');
let navWin = document.querySelector('nav');
// navWin.addEventListener('mouseenter', showBehind);

let navSectn = navWin.querySelectorAll('nav a');
for (let i = 0; i < navSectn.length; i++) {
  navSectn[i].addEventListener('mouseenter', showBehind);
}
let sec1 = document.getElementById('sec1');
let header = document.querySelector('header');
let backgroundView = document.getElementById('navItm');
let backgroundP = document.querySelector('#navItm p');
let hero = document.getElementById('hero');
hero.addEventListener('click', goDown);
backgroundView.style.display = 'none';
navWin.style.display = 'none';
function showSide(cond) {
  if (cond) {
    navWin.style.top = `${window.scrollY}px`;
    backgroundView.style.top = `${window.scrollY + 280}px`;
    navWin.style.display = 'flex';

    let c = 50;
    let b = 100;
    let d = 0;
    let k = 1;
    let navBtnAnim = setInterval(() => {
      hero.style.opacity = k;
      header.style.opacity = k;
      showBig(b, d, true);
      b--;
      c -= 0.35;
      d += 0.01;
      k -= 0.01;
      if (b <= 0) {
        backgroundView.style.display = 'flex';
        backgroundP.textContent = '';
        clearInterval(navBtnAnim);
      }
    }, 1);
    return;
  }
  backgroundView.style.display = 'none';

  let c = 15.34;
  let b = 0;
  let d = 1;
  let k = 0;
  let anim = setInterval(() => {
    hero.style.opacity = k;
    header.style.opacity = k;
    showBig(b, d, true);
    c += 0.35;
    b += 20;
    d -= 0.01;
    k += 0.1;
    if (b >= 1920) {
      navWin.style.display = 'none';
      clearInterval(anim);
    }
  }, 5);
}

function showBig(o, d, show) {
  if (show) {
    navWin.style.left = `${o}px`;
    navWin.style.opacity = d;
    return;
  }
  navWin.style.left = '100%';
  navWin.style.opacity = 1;
}
function showBehind(e) {
  backgroundP.textContent = e.target.textContent;
  console.log(e.target.textContent);
  let c = 0;
  let k = 1;
  let anim = setInterval(() => {
    backgroundP.style.opacity = c;
    backgroundP.style.letterSpacing = `${k}px`;
    c += 0.01;
    k += 0.2;
    if (c >= 0.4) {
      clearInterval(anim);
    }
  }, 10);
}
window.onscroll = () => {
  if (window.scrollY > 50 && header.style.height != '50px') {
    shrenkHeader();
  } else if (window.scrollY < 50) {
    expandHeader();
  }
};
let navImg = document.querySelector('#navBtn img');
let logoP = document.getElementById('logoP');
function shrenkHeader() {
  header.style.height = '50px';
  logoP.style.display = 'none';
  navImg.setAttribute(
    'src',
    'https://img.icons8.com/ios-filled/40/ffffff/back.png'
  );
}
function expandHeader() {
  header.style.height = '100px';
  logoP.style.display = 'revert';
  navImg.setAttribute(
    'src',
    'https://img.icons8.com/ios-filled/50/ffffff/back.png'
  );
}
let hAndImg = document.querySelectorAll('#hero *');

function goDown() {
  let c = window.scrollY;
  let k = 1;

  let anim = setInterval(() => {
    hAndImg[0].style.opacity = k;
    hAndImg[1].style.opacity = k;
    window.scrollTo(0, c);
    c += 5;
    k -= 0.001;
    if (c >= 980) {
      hAndImg[0].style.opacity = 1;
      hAndImg[1].style.opacity = 1;
      clearInterval(anim);
    }
  }, 1);
}

////////////////////////////////////////////////////
///////////////// Bus Mall Original ////////////////
////////////////////////////////////////////////////
// to be added to 


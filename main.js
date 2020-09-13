//   Variables
const qNo = document.getElementById('q-no');
const question = document.getElementById('question');
const menubtn = document.getElementById('menubtn');
const pos = document.getElementById('pos');
const back = document.getElementById('back');
const next = document.getElementById('next');
const body = document.querySelector('body');

function themeSwitch(e){
  if (e == 0) {
    body.classList.add("light");
    body.classList.remove("dark");
  }
  else {
    body.classList.add("dark");
    body.classList.remove("light");
  }
}

let themeOpen = false;
let menuOpen = false;
const theme = document.getElementById('theme');
const dd1 = document.getElementsByClassName('dropdown');
const dd2 = document.getElementById('dropdown2');
function dd(close) {
  themeOpen = !(themeOpen) && close;
    console.log(themeOpen);
  if (themeOpen) {
    dd2.style.height = "90px";
    dd2.style.pointerEvents = "auto";
  }
  else {
    dd2.style.height = "0px";
    dd2.style.pointerEvents = "none";
  }
}

function mo(close) {
  // body...
  menuOpen = !(menuOpen) && close;
  console.log(menuOpen);
  if (menuOpen) {
    dd1[0].style.opacity = "1";
    dd1[0].style.pointerEvents = "auto"
  }
  else {
    dd1[0].style.opacity = "0";
    dd1[0].style.pointerEvents = "none";
  }
}

let a = -1;
let prea = 1;
let test = ["What's my full name", "55", "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed aliquam nulla.modo sedsapien vitae, interdum tristique massa.", '4', '5', '6', '7'];

for (var i = 0; i < test.length; i++) {
  let div = document.createElement("div");
  div.classList = "pos-mark";
  pos.appendChild(div);
}
const markers = document.getElementsByClassName("pos-mark");

questionChanger(1);

function markerChanger(a,e) {
  // body...
  
    markers[a].classList.add("curr-pos");
    markers[prea].classList.remove("curr-pos");
}

function questionPicker(a) {
  // body...
  qNo.innerText = "Question #"+(a+1);
  question.innerText = test[a];
}

function questionChanger(e) {
  // body...
    a += e;
    if (a >= test.length) {
      a = 0;
      
    }
    else if (a < 0) {
      a = test.length - 1;
   
    }
        markerChanger(a,e);
        questionPicker(a);
    prea = a;

    
}
/*
menubtn.addEventListener("DOMActivate", function c(close){
  dd(false)
  
  mo(true)
});

menubtn.addEventListener("focusout", function b(close) {
  dd(false)
  console.log('pd');
  mo(false)
});
*/
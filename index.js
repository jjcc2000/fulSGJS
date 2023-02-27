const btnAll = document.querySelectorAll(".btn");
const bdy = document.querySelector("body");
const posibleColor = ["blue", "red", "green", "yellow"];
const correctOrden = [];
let userOrden = [];
let level = 0;
let sta = false;
////////////////////////////////////////TODO:///////////////////////////////////////////////////////////
const aumentArray = function x() {
  userOrden = [];
  level++;
  document.getElementById("level-title").textContent = "Level: " + level;
  let nmbRnd = Math.floor(Math.random() * 4);
  let col = posibleColor[nmbRnd];
  correctOrden.push(col);
  document.getElementById(col).classList.add("pressed");
  setTimeout(function () {
    document.getElementById(col).classList.remove("pressed");
  }, 500);
};

////////////////////////////////////////TODO:///////////////////////////////////////////////////////////////////
const check = function (currentLevel) {
  if (userOrden[currentLevel] === correctOrden[currentLevel]) {
    if (userOrden.length === correctOrden.length) {
      setTimeout(function () {
        aumentArray();
      }, 1000);
    }
  } else {
    bdy.classList.add("game-over");
    soundPlay("wrong");
    reset();
  }
};
////////////////////////////////////////TODO:///////////////////////////////////////////////////////////////////
document.querySelector("body").addEventListener("keydown", function () {
  if (!sta) {
    aumentArray();
    sta = true;
  }
});
////////////////////////////////////////TODO:///////////////////////////////////////////////////////////////////
btnAll.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let x = btn.getAttribute("id");
    userOrden.push(x);
    check(userOrden.length - 1);
    soundPlay(x);
    pressedAnimation(x);
  });
});
////////////////////////////////////////TODO:///////////////////////////////////////////////////////////////////

const soundPlay = function (id) {
  let music = new Audio("sounds/" + id + ".mp3");
  music.play();
};
////////////////////////////////////////TODO:///////////////////////////////////////////////////////////////////
const reset = function () {
  correctOrden = [];
  sta = false;
  level = 0;
};
////////////////////////////////////////TODO:///////////////////////////////////////////////////////////////////
const pressedAnimation = function (id) {
  document.getElementById(id).classList.add("preWhited");
  setTimeout(function () {
    document.getElementById(id).classList.remove("preWhited");
  }, 1000);
};

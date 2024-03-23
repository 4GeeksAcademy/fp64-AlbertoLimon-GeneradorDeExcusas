/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("excusa").innerHTML = generarExcusa();
};

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function generarExcusa() {
  let excusa =
    devolverRandomInfo(who) +
    " " +
    devolverRandomInfo(action) +
    " " +
    devolverRandomInfo(what) +
    " " +
    devolverRandomInfo(when);
  return excusa;
}

function devolverRandomInfo(array) {
  return array[Math.floor(Math.random() * array.length) + 0];
}

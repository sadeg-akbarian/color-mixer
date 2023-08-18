const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const main = document.querySelector("main");
const header = document.querySelector("header");
const currentColor = document.querySelector("#currentColor");
let chosenRedColor = "255";
let chosenGreenColor = "105";
let chosenBlueColor = "180";

function mainBackground() {
  main.style.backgroundColor =
    "rgb(" +
    chosenRedColor +
    ", " +
    chosenGreenColor +
    ", " +
    chosenBlueColor +
    ")";
}

function headerBackground() {
  header.style.backgroundColor =
    "rgba(" +
    chosenRedColor +
    ", " +
    chosenGreenColor +
    ", " +
    chosenBlueColor +
    ", 0.25)";
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function valueToHex(c) {
  var hex = c.toString(16);
  if (hex.length === 1) {
    return "0" + hex;
  } else {
    return hex;
  }
}

function rgbToHex(r, g, b) {
  return valueToHex(r) + valueToHex(g) + valueToHex(b);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

red.addEventListener("change", function (event) {
  chosenRedColor = event.target.value;
  mainBackground();
  headerBackground();
  console.log(main.style.backgroundColor);
  currentColor.innerText =
    "#" +
    rgbToHex(
      parseInt(chosenRedColor),
      parseInt(chosenGreenColor),
      parseInt(chosenBlueColor)
    );
});

green.addEventListener("change", function (event) {
  chosenGreenColor = event.target.value;
  mainBackground();
  headerBackground();
  currentColor.innerText =
    "#" +
    rgbToHex(
      parseInt(chosenRedColor),
      parseInt(chosenGreenColor),
      parseInt(chosenBlueColor)
    );
});

blue.addEventListener("change", function (event) {
  chosenBlueColor = event.target.value;
  mainBackground();
  headerBackground();
  currentColor.innerText =
    "#" +
    rgbToHex(
      parseInt(chosenRedColor),
      parseInt(chosenGreenColor),
      parseInt(chosenBlueColor)
    );
});

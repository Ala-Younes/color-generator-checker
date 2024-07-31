// Selectors
const changeBgColorBtn = document.querySelector(".btn");
const body = document.querySelector("body");
const hexCodeText = document.querySelector("#bg-hex-code");
const btnGroup = document.querySelector(".btn-group");

// Utility Functions
const getRandomHexColor = () => {
  const choices = "123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += choices[Math.floor(Math.random() * choices.length)];
  }
  return color;
};

const getRandomArrayHexColor = (n) =>
  Array.from({ length: n }, getRandomHexColor);
const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

const generateRandomUniqueColors = (n, colorArray) => {
  const uniqueColors = new Set();
  while (uniqueColors.size < n) {
    uniqueColors.add(colorArray[getRandomIndex(colorArray)]);
  }
  return Array.from(uniqueColors);
};

const createButton = (color, onClick) => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.textContent = color;
  button.style.backgroundColor = color;
  button.addEventListener("click", () => onClick(color));
  return button;
};

const updateButtonGroup = (colors, onClick) => {
  btnGroup.innerHTML = "";
  colors.forEach((color) => btnGroup.appendChild(createButton(color, onClick)));
};

// Main Functions
let currentTargetColor = "";

const initializeApp = () => {
  const colorArray = getRandomArrayHexColor(20);
  const uniqueColors = generateRandomUniqueColors(6, colorArray);
  updateButtonGroup(uniqueColors, handleChangeBackgroundColor);
  currentTargetColor = getRandomColor(uniqueColors);
  applyColor(currentTargetColor);
};

const getRandomColor = (colors) => colors[getRandomIndex(colors)];

const applyColor = (color) => {
  hexCodeText.innerText = color;
  body.style.backgroundColor = color;
};

const handleChangeBackgroundColor = (color) => {
  if (currentTargetColor === color) {
    console.log("Success");
    initializeApp();
  } else {
    alert("Wrong choice");
  }
};

// Event Listeners
document.addEventListener("DOMContentLoaded", initializeApp);

import './style.css'

// Score counter elements
const counterElement = document.getElementById('score-counter');
const scorePerSecondElement = document.getElementById('score-per-second');
const scorePerClickElement = document.getElementById('score-per-click');

// Upgrades elements
const clickerButton = document.getElementById('button-clicker');

const upgradeOneButton = document.getElementById('upgrade-1-button');
const upgradeTwoButton = document.getElementById('upgrade-2-button');
const upgradeThreeButton = document.getElementById('upgrade-3-button');
const upgradeFourButton = document.getElementById('upgrade-4-button');
const upgradeFiveButton = document.getElementById('upgrade-5-button');

const upgradeOneLevelElement = document.getElementById('upgrade-1-level');
const upgradeTwoLevelElement = document.getElementById('upgrade-2-level');
const upgradeThreeLevelElement = document.getElementById('upgrade-3-level');
const upgradeFourLevelElement = document.getElementById('upgrade-4-level');
const upgradeFiveLevelElement = document.getElementById('upgrade-5-level');

// Score state
let counter = 0;
let scorePerSecond = 0;
let scorePerClick = 1;

let upgradeOneLevel = 0;
let upgradeTwoLevel = 0;
let upgradeThreeLevel = 0;
let upgradeFourLevel = 0;
let upgradeFiveLevel = 0;

let upgradeOneCost = 15;
let upgradeTwoCost = 50;
let upgradeThreeCost = 150;
let upgradeFourCost = 300;
let upgradeFiveCost = 1000;

let upgradeOneValue = 1;
let upgradeTwoValue = 5;
let upgradeThreeValue = 10;
let upgradeFourValue = 20;
let upgradeFiveValue = 30;

// Event listeners
clickerButton.addEventListener('click', () => {
  counter += 1;
  updateGame();
});

upgradeOneButton.addEventListener('click', () => {
  counter -= upgradeOneCost;
  upgradeOneLevel += 1;
  updateGame();
});

upgradeTwoButton.addEventListener('click', () => {
  counter -= upgradeTwoCost;
  upgradeTwoLevel += 1;
  updateGame();
});

upgradeThreeButton.addEventListener('click', () => {
  counter -= upgradeThreeCost;
  upgradeThreeLevel += 1;
  updateGame();
});

upgradeFourButton.addEventListener('click', () => {
  counter -= upgradeFourCost;
  upgradeFourLevel += 1;
  updateGame();
});

upgradeFiveButton.addEventListener('click', () => {
  counter -= upgradeFiveCost;
  upgradeFiveLevel += 1;
  updateGame();
});

function enableButton(button) {
  button.removeAttribute('disabled');
}

function disableButton(button) {
  button.setAttribute('disabled', true);
}

function updateButtons() {
  if (counter >= upgradeOneCost) {
    enableButton(upgradeOneButton);
  } else {
    disableButton(upgradeOneButton);
  }

  if (counter >= upgradeTwoCost) {
    enableButton(upgradeTwoButton);
  } else {
    disableButton(upgradeTwoButton);
  }

  if (counter >= upgradeThreeCost) {
    enableButton(upgradeThreeButton);
  } else {
    disableButton(upgradeThreeButton);
  }

  if (counter >= upgradeFourCost) {
    enableButton(upgradeFourButton);
  } else {
    disableButton(upgradeFourButton);
  }

  if (counter >= upgradeFiveCost) {
    enableButton(upgradeFiveButton);
  } else {
    disableButton(upgradeFiveButton);
  }
}

function updateScreen() {
  counterElement.innerText = counter;
  scorePerClickElement.innerText = scorePerClick;
  scorePerSecondElement.innerText = scorePerSecond;

  upgradeOneLevelElement.innerText = upgradeOneLevel;
  upgradeTwoLevelElement.innerText = upgradeTwoLevel;
  upgradeThreeLevelElement.innerText = upgradeThreeLevel;
  upgradeFourLevelElement.innerText = upgradeFourLevel;
  upgradeFiveLevelElement.innerText = upgradeFiveLevel;

  updateButtons();
}

function updateGame() {
  scorePerSecond =
    (upgradeOneLevel * upgradeOneValue)
    + (upgradeTwoLevel * upgradeTwoValue)
    + (upgradeThreeLevel * upgradeThreeValue)
    + (upgradeFourLevel * upgradeFourValue)
    + (upgradeFiveLevel * upgradeFiveValue);

  counter += scorePerSecond;
  updateScreen();
}


updateScreen();
setInterval(() => updateGame(), 1000);


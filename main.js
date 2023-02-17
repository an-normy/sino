// Get the canvas element and create a reference to it
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the starting position of the car
let carX = 250;
let carY = 300;

// Set the size of the car
const carWidth = 50;
const carHeight = 100;

// Load the images for the game
const background = new Image();
background.src = 'parkingLot.jpg';

const greencar = new Image();
greencar.src = 'car2.png';

// Call the uploadBackground and uploadgreencar functions to draw the images on the canvas
background.onload = function() {
  uploadBackground();
};

greencar.onload = function() {
  uploadgreencar();
};

// Define the functions to upload the images to the canvas
function uploadBackground() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
  ctx.drawImage(greencar, carX, carY, carWidth, carHeight);
}

// Define the functions to move the car
function up() {
  if (carY >= 10) {
    carY -= 10;
    uploadBackground();
    uploadgreencar();
  }
}

function down() {
  if (carY <= 300) {
    carY += 10;
    uploadBackground();
    uploadgreencar();
  }
}

function left() {
  if (carX >= 10) {
    carX -= 10;
    uploadBackground();
    uploadgreencar();
  }
}

function right() {
  if (carX <= 500) {
    carX += 10;
    uploadBackground();
    uploadgreencar();
  }
}

// Set event listeners for the arrow keys to move the car
document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 37:
      left();
      break;
    case 38:
      up();
      break;
    case 39:
      right();
      break;
    case 40:
      down();
      break;
  }
});

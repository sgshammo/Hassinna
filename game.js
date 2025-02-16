// Get the canvas element and its context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 800;
canvas.height = 600;

// Create new Image objects for your faces
const myFace = new Image();
const enemyFace1 = new Image();
const enemyFace2 = new Image();

// Set the source of the images
myFace.src = 'https://raw.githubusercontent.com/sgshammo/Hassinna/refs/heads/main/images.jpeg';  // First image
enemyFace1.src = 'https://raw.githubusercontent.com/sgshammo/Hassinna/refs/heads/main/images%20(2).jpeg';  // Second image
enemyFace2.src = 'https://raw.githubusercontent.com/sgshammo/Hassinna/refs/heads/main/images%20(1).jpeg';  // Third image

// Function to draw the images on the canvas
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas

    // Draw your face and enemy faces at different positions
    ctx.drawImage(myFace, 100, 100, 50, 50);  // Your face at (100, 100)
    ctx.drawImage(enemyFace1, 300, 100, 50, 50);  // Enemy face 1 at (300, 100)
    ctx.drawImage(enemyFace2, 500, 100, 50, 50);  // Enemy face 2 at (500, 100)
}

// Call the draw function to render the game every 1/60th of a second (60 FPS)
setInterval(drawGame, 1000 / 60);

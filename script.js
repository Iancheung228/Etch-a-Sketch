const container = document.querySelector("#container"); 
const resetButton = document.getElementById('resetButton');


let isDrawing = false;

// Listen for mouse events on the whole page
document.body.addEventListener("mousedown", () => isDrawing = true);
document.body.addEventListener("mouseup", () => isDrawing = false);


// Create the grid
function createGrid(size) {
    // Clear previous grid
    container.innerHTML = ""; // innerHTML access the HTML content of container, by assigning "" it deletes the HTML content
  
    const squareSize =  Math.floor(640 / size); // calculate pixel size of each square
    
    
    for (let i = 0; i< size*size; i++){
        const square = document.createElement('div');
        square.classList.add('square'); // classlist is a read-only property that returns the class attributes of the element. This can then be used to manipulate the class list.

        // Although the classList property itself is read-only, you can modify its associated DOMTokenList using the add(), remove(), replace(), and toggle() methods.

        // Set dynamic size
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add a hover effect using mouseenter (option 1 adds a class)
        // square.addEventListener('mouseenter', () => {
        //     square.classList.add('hovered');
        // });
        // option 2 change background color directly
        // square.addEventListener('mouseenter', () => {
        //     square.style.backgroundColor = 'black';
        //   });


        square.addEventListener('mouseover', () => {
            if (isDrawing) {
              square.classList.add('hovered'); // or use .style.backgroundColor = 'black'
            }
          });

          
        square.addEventListener('mousedown', () => {
            square.classList.add('hovered');
          });
        

        container.appendChild(square);
    }
}

// Ask for size and recreate grid
resetButton.addEventListener('click', () => {
    let size = prompt("Enter number of squares per side (max: 100):");
    size = parseInt(size);
  
    if (Number.isNaN(size) || size < 1 || size > 100) {
      alert("Please enter a valid number between 1 and 100.");
    } 
    else {
      createGrid(size);
    }
  });
  
  // Initialize default grid
  createGrid(40);
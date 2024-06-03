// import DraggableOverlay from './DraggableOverlay';

// // Create a container div
// const container = document.createElement('div');
// document.body.appendChild(container);

// // Render the DraggableOverlay component into the container
// ReactDOM.render(<DraggableOverlay />, container);
// Create a new div element for the draggable box
const draggableBox = document.createElement('div');

// Set the style of the draggable box
draggableBox.style.position = 'fixed';
draggableBox.style.top = '50px';
draggableBox.style.left = '50px';
draggableBox.style.width = '100px';
draggableBox.style.height = '100px';
draggableBox.style.backgroundColor = 'rgba(0, 0, 0, 1)'; // Semi-transparent black
draggableBox.style.cursor = 'move';
draggableBox.style.zIndex = '9999'; // Ensure it's on top

// Append the draggable box to the body
document.body.appendChild(draggableBox);

// Implement the drag functionality
let isDragging = false;
let offsetX: number, offsetY: number;

draggableBox.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - draggableBox.getBoundingClientRect().left;
  offsetY = e.clientY - draggableBox.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    let newLeft = e.clientX - offsetX;
    let newTop = e.clientY - offsetY;

    // Boundary checks
    if (newLeft < 0) {
      newLeft = 0;
    } else if (newLeft + draggableBox.offsetWidth > window.innerWidth) {
      newLeft = window.innerWidth - draggableBox.offsetWidth;
    }

    if (newTop < 0) {
      newTop = 0;
    } else if (newTop + draggableBox.offsetHeight > window.innerHeight) {
      newTop = window.innerHeight - draggableBox.offsetHeight;
    }

    draggableBox.style.left = `${newLeft}px`;
    draggableBox.style.top = `${newTop}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
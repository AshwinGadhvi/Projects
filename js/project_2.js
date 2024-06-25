const imageContainers = document.querySelectorAll('.c_img');

let currentIndex = 0;

// Initialize the display: show the first container, hide the rest
imageContainers.forEach((container, index) => {
    container.style.display = index === 0 ? 'block' : 'none';
});

setInterval(() => {
    // Hide the current container
    imageContainers[currentIndex].style.display = 'none';

    // Calculate the next index
    currentIndex = (currentIndex + 1) % imageContainers.length;

    // Show the next container
    imageContainers[currentIndex].style.display = 'block';
}, 1000);

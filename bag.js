const images = [
    'images/saree.jpg',
    'images/saree2.jpg',
    'images/Men.jpg'
];

let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('rotatingImage').src = images[currentIndex];
}

setInterval(changeImage, 3000); // Change image every 3 seconds

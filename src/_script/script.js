const imageUrls = [
    // Add URLs of the images in your cloud folder here
    // Example: 'https://example.com/image1.jpg',
    //          'https://example.com/image2.jpg',
    //          ...
    'https://sgsupport.com/wp-content/uploads/2021/10/services1.png',
    'https://sgsupport.com/wp-content/uploads/2021/10/services2.png',
    'https://sgsupport.com/wp-content/uploads/2021/10/services3.png'
];

let currentIndex = 0;
const tickerImage = document.getElementById('ticker-image');

function updateImage() {
    tickerImage.src = imageUrls[currentIndex];
    currentIndex = (currentIndex + 1) % imageUrls.length;
}

setInterval(updateImage, 5000);

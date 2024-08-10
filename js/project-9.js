const mediaContainer = document.getElementById('media-container');
const mediaImg = document.querySelector('#media-container img');
const mediaVideo = document.querySelector('#media-container video');
const mediaCaptions = document.querySelectorAll('#media-container div');

let isImgVisible = false; // Initialize to false to show video by default

// Function to show image
function showImage() {
    mediaCaptions[1].style.display = 'block';
    mediaImg.style.display = 'block';
    mediaVideo.style.display = 'none';
    mediaCaptions[0].style.display = 'none';
    isImgVisible = true;
}

// Function to show video
function showVideo() {
    mediaCaptions[1].style.display = 'none';
    mediaImg.style.display = 'none';
    mediaVideo.style.display = 'block';
    mediaCaptions[0].style.display = 'block';
    isImgVisible = false;
}

// Initial state - show video
showVideo();

// Mouseover event
mediaContainer.addEventListener('mouseover', () => {
    if (isImgVisible) {
        showVideo();
    } else {
        showImage();
    }
});

// Mouseout event
mediaContainer.addEventListener('mouseout', () => {
    if (isImgVisible) {
        showVideo(); // Show video when mouse leaves
    }
});

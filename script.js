var images = document.querySelectorAll('.gallery img');
var previousBtn = document.getElementById('previousBtn');
var nextBtn = document.getElementById('nextBtn');
var currentIndex = 0;

previousBtn.addEventListener('click', function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage();
});

nextBtn.addEventListener('click', function () {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage();
});

function showImage() {
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[currentIndex].style.display = 'block';
}

showImage();
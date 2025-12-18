const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;

function openLightbox(img) {
  currentIndex = Array.from(images).indexOf(img);
  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

// Close on outside click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
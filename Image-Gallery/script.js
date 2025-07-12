const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;

// Open image in lightbox
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

// Close lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
}

// Show previous image
function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

// Show next image
function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

// Filter images
function filterImages(category) {
  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'inline';
    } else {
      img.style.display = 'none';
    }
  });
}

// Highlight active filter button
const filterButtons = document.querySelectorAll('.filters button');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Theme Toggle Logic
const themeCheckbox = document.getElementById('themeCheckbox');
themeCheckbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

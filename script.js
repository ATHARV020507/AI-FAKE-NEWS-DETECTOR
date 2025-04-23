// Toggle mobile menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Category slider functionality
const categories = document.querySelector('.categories');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', () => {
  categories.scrollBy({ left: -200, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  categories.scrollBy({ left: 200, behavior: 'smooth' });
});

// Form submission (prevent default for demo)
document.querySelector('.submit-btn').addEventListener('click', function(e) {
  e.preventDefault();
  const newsInput = document.querySelector('.news-input').value;
  const sourceInput = document.querySelector('.source-input').value;
  
  if (newsInput && sourceInput) {
      alert('News submitted for fact-checking!');
  } else {
      alert('Please fill in both fields.');
  }
});

// Responsive design adjustments
function handleResize() {
  const width = window.innerWidth;
  if (width > 768) {
      document.querySelector('.nav-links').classList.remove('active');
  }
}

window.addEventListener('resize', handleResize);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Simulate loading state
  setTimeout(() => {
      document.body.classList.add('loaded');
  }, 500);
});
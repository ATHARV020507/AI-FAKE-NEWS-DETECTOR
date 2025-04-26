document.addEventListener('DOMContentLoaded', function () {
  // Initialize loading state
  setTimeout(() => {
      document.body.classList.add('loaded');
  }, 500);

  // Toggle mobile menu
  document.querySelector('.menu-toggle').addEventListener('click', function () {
      document.querySelector('.nav-links').classList.toggle('active');
  });

  // Category slider functionality
  const categories = document.querySelector('.categories');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  if (prevBtn && nextBtn && categories) {
      prevBtn.addEventListener('click', () => {
          categories.scrollBy({ left: -200, behavior: 'smooth' });
      });

      nextBtn.addEventListener('click', () => {
          categories.scrollBy({ left: 200, behavior: 'smooth' });
      });
  }

  // Form submission for fake news detection
  const predictForm = document.getElementById('predictForm');
  if (predictForm) {
      predictForm.addEventListener('submit', async function (e) {
          e.preventDefault();

          const newsText = document.getElementById('inputNews').value.trim();

          if (!newsText) {
              alert('Please enter some news text.');
              return;
          }

          try {
              const response = await fetch('/predict', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ input: newsText })
              });

              const result = await response.json();
              document.getElementById('result').innerText =
                  `Prediction: ${result.prediction} (Confidence: ${result.accuracy.toFixed(2)}%)`;
          } catch (error) {
              console.error('Prediction error:', error);
              document.getElementById('result').innerText = 'Prediction failed.';
          }
      });
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

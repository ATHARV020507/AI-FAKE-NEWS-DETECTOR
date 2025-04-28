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

            // Clear previous result
            const resultElement = document.getElementById('result');
            resultElement.innerText = '';
            resultElement.style.color = '';  // reset color to default

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
                resultElement.innerText = 
                    `Prediction: ${result.prediction} (Confidence: ${result.accuracy.toFixed(2)}%)`;

                // Apply color based on the result
                const resultText = result.prediction.toLowerCase();
                if (resultText.includes("fake")) {
                    resultElement.style.color = "red";
                } else if (resultText.includes("real")) {
                    resultElement.style.color = "green";
                } else {
                    resultElement.style.color = "white"; // fallback
                }
            } catch (error) {
                console.error('Prediction error:', error);
                document.getElementById('result').innerText = 'Prediction failed.';
            }
        });
    }

    // --- BREAKING NEWS FETCHING ---
    async function fetchBreakingNews() {
        const apiKey = 'b5d6d3c39483449bb8e910368af4922c'; // Your NewsAPI key
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${apiKey}`;

        const breakingNewsSection = document.getElementById('breaking-news-section');
        if (breakingNewsSection) {
            const newsContainer = document.createElement('div');
            newsContainer.classList.add('breaking-news-container');
            newsContainer.textContent = 'Loading breaking news...';
            breakingNewsSection.appendChild(newsContainer);

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                newsContainer.innerHTML = '';

                if (data.status === 'ok' && data.articles.length > 0) {
                    data.articles.forEach(article => {
                        const headlineElement = document.createElement('p');
                        const link = document.createElement('a');
                        link.href = article.url;
                        link.textContent = article.title;
                        link.target = '_blank';
                        headlineElement.appendChild(link);
                        newsContainer.appendChild(headlineElement);
                    });
                } else {
                    newsContainer.textContent = 'Failed to fetch breaking news.';
                }
            } catch (error) {
                console.error('Error fetching breaking news:', error);
                newsContainer.textContent = 'Error loading breaking news.';
            }
        }
    }

    // Call the breaking news function on page load
    fetchBreakingNews();
});


// Responsive design adjustments
function handleResize() {
    const width = window.innerWidth;
    if (width > 768) {
        document.querySelector('.nav-links').classList.remove('active');
    }
}
window.addEventListener('resize', handleResize);

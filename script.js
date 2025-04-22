document.getElementById("submit-btn").addEventListener("click", () => {
    const news = document.querySelector("input[placeholder='Enter your NEWS']").value;
    const source = document.querySelector("input[placeholder='Enter the source of NEWS']").value;
  
    if (!news || !source) {
      alert("Please fill out both fields.");
    } else {
      alert(`Submitted!\n\nNews: ${news}\nSource: ${source}`);
      // Here you could later add logic to analyze the news
    }
  });
  
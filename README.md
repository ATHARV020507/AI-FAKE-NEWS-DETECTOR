# 📰 AI Fake News Detector

An intelligent web-based system built by team HackX, that uses machine learning to identify and classify news as *fake* or *real*. This project combines a user-friendly interface with powerful AI capabilities to combat misinformation online.

## 🚀 Features

- 🔍 AI-powered fake news classification
- 🌐 Interactive frontend built with HTML, CSS, and JavaScript
- 🔄 Flask backend for seamless communication between frontend and model
- 📥 Simple input interface for news content
- 📊 Real-time predictions with intuitive UI feedback

## 📊 Dataset

The dataset is available at : https://drive.google.com/file/d/13jxJYzrpKJXteckGhPtpt6aLvj0nZgfo/view?usp=drive_link

## 🧰 Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Flask (Python)  
- **ML Model:** Decision Tree  
- **Dependencies:** Listed in `requirements.txt`

## 📂 Project Structure

```plaintext
├── app.py                      # Main Flask app
├── requirements.txt            # List of Python dependencies
├── fake_news_model.pkl         # Trained Decision Tree model
├── vectorizer.pkl              # Vectorizer for text input
│
├── templates/                  # HTML files
│   └── index.html
│
├── static/                     # CSS, JS
│   ├── style.css
│   └── script.js
│
└── README.md                   # Project description
```

## 🔧 Installation (for Localhost)

1. **Clone the repository**

```bash
git clone https://github.com/AnubhavBhatnagar27/HackX---AI-Fake-News-Detector
cd HackX---AI-Fake-News-Detector
```

2. **Create a virtual environment (optional but recommended)**

```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

3. **Install dependencies**

```bash
pip install -r requirements.txt
```

4. **Run the application**

```bash
python app.py
```

5. Open your browser and go to `http://localhost:5000`


## 🤝 Team

This project was built collaboratively by Team HackX and team members during Codictive 3.0 (Hackathon held at BIST Bhopal).
Team Members : 
- Anubhav Bhatnagar 
- Atharv Mishra
- Atharv Shukla
- Anushka Gupta
- Janavi Chhabaria
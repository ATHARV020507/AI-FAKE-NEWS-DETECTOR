from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import joblib
import re
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem.porter import PorterStemmer
from wordcloud import WordCloud
from tqdm import tqdm


app = Flask(__name__)
CORS(app)

model = joblib.load('fake_news_model.pkl')
vectorizer = joblib.load('vectorizer.pkl')

def preprocess_text(text_data):
	preprocessed_text = []

	for sentence in tqdm(text_data):
		sentence = re.sub(r'[^\w\s]', '', sentence)
		preprocessed_text.append(' '.join(token.lower()
								for token in str(sentence).split()
								if token not in stopwords.words('english')))

	return preprocessed_text


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    input_text = data['input']

    # Preprocess the input text
    preprocessed_input = preprocess_text([input_text])[0]

    # Transform the input using the vectorizer
    vectorized_input = vectorizer.transform([preprocessed_input])

    # Make a prediction
    prediction = model.predict(vectorized_input)[0]

    # Get prediction probability (for accuracy percentage)
    prediction_probability = model.predict_proba(vectorized_input)[0]
    accuracy_percentage = max(prediction_probability) * 100

    # Convert prediction to human-readable label
    label = 'Real News' if prediction == 1 else 'Fake News'  

    return jsonify({'prediction': label, 'accuracy': accuracy_percentage})

if __name__ == '__main__':
    app.run(debug=True)
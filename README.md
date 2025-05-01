# AI - Based Multi Sign Language Converter For Speech and Text Communication 

## 📖 Overview

This Flask-based web application is a real-time **Sign Language to Speech/Text Converter**, focused on recognizing individual letters from **American Sign Language (ASL)** and **Indian Sign Language (ISL)**.

It translates hand gestures into letters using a webcam, suggests possible words from the detected letters and uses text-to-speech (TTS) to vocalize them. It also includes an **interactive learning module with a quiz**, making it ideal for both communication and education.

---

## 🖼️ Project Screenshots
![main](https://github.com/user-attachments/assets/954f6c21-eca1-4575-ba1a-719b2546f0f1)

![image](https://github.com/user-attachments/assets/6ebea19d-a3ec-45ae-b973-216ee6bbb38d)

![image](https://github.com/user-attachments/assets/a14a329b-3424-46d6-bd0e-e588716fd0ec)


![lm](https://github.com/user-attachments/assets/2a2da968-29e5-454b-a6e9-62e21d516990)

![lm sl](https://github.com/user-attachments/assets/f73763dd-e61e-41ce-8936-49aab92f0558)

![lm q](https://github.com/user-attachments/assets/04308112-098a-4e4d-89e6-e131995c2ec4)

---

## 🚀 Features

- **Letter Recognition**  
  Detects ASL/ISL alphabet gestures using webcam input.

- **Word Suggestions**  
  Suggests complete words based on the sequence of recognized letters.

- **Speech Output**  
  Converts recognized or typed text into audible speech via TTS.

- **Learning Module**  
  Interactive learning section with gesture images to help users memorize ASL/ISL letters.

- **Quiz Mode**  
  Short quizzes to test users' knowledge of sign language letters.

---

## 🌐 Tech Stack

| Area              | Technology            |
|-------------------|------------------------|
| **Frontend**      | HTML, CSS, Bootstrap (via Flask templates) |
| **Backend**       | Flask (Python)         |
| **Computer Vision**| OpenCV, MediaPipe      |
| **ML Model**      | Random Forest |
| **Text-to-Speech**| pyttsx3                |

---

## 📚 Datasets Used
**American Sign Language (ASL)**: Utilized the [ASL Alphabet Dataset on Kaggle](https://www.kaggle.com/datasets/grassknoted/asl-alphabet?select=asl_alphabet_train) containing images of hand gestures representing letters in ASL.

**Indian Sign Language (ISL)**: Employed the [Indian Sign Language Dataset on Kaggle](https://www.kaggle.com/datasets/vaishnaviasonawane/indian-sign-language-dataset) comprising images of hand gestures used in ISL.

These datasets were used to train and validate machine learning models for gesture recognition and translation into speech and text across multiple sign languages.
 
---

## 🧠 How to Use This Project

Follow the steps below to set up and run the AI - Based Multi Sign Language Converter:

### 🔁 Step 1: Clone the Repository

```bash
git clone [https://github.com/Niharika-Varshney/Multi-Sign-language-Speech-and-Text-Converter](https://github.com/SpoorthiChandraP/Multi-Sign-Language-Converter.git)
cd Multi-Sign-language-Speech-and-Text-Converter

📥 Step 2: Download Datasets
Download the following datasets from Kaggle and save them into the specified folders:

American Sign Language (ASL)
Download the [ASL Alphabet Dataset from Kaggle](https://www.kaggle.com/datasets/grassknoted/asl-alphabet?select=asl_alphabet_train).
Save the dataset into a directory named Data_ASL.

Indian Sign Language (ISL)
Download the [Indian Sign Language Dataset from Kaggle](https://www.kaggle.com/datasets/vaishnaviasonawane/indian-sign-language-dataset).
Save the dataset into a directory named Data_ISL.

🧪 Step 3: Data Augmentation (Optional)
If needed, run the augmentation script to increase dataset size:
python Data_Augmentation.py

⚙️ Step 4: Data Processing
Process each dataset by running its corresponding script:
# ASL
python ASL_Data_Processing.py

# ISL
python ISL_Data_Processing.py

🧠 Step 5: Train Classifiers
Train the models for each sign language:
# ASL
python ASL_Train_Classifier.py

# ISL
python ISL_Train_Classifier.py

🧪 Step 6: Testing
Evaluate model performance:
# ASL
python ASL_Testing.py

# ISL
python ISL_Testing.py

🚀 Step 7: Deploy the Application
Move the trained models (model_ASL and model_ISL) into the Frontend_SignLanguage/ directory.

Run the app:
python app.py

Now, your application should be up and running, ready to convert ASL and ISL gestures into speech and text.

from flask import Flask, render_template, Response, jsonify, request
import cv2 as cv
import mediapipe as mp
import numpy as np
import pickle
import time
import pyttsx3
import difflib 

app = Flask(__name__)

# Load models
model_asl_dict = pickle.load(open('model_ASL12.pkl', 'rb'))
model_asl = model_asl_dict['model']
model_isl_dict = pickle.load(open('model_ISL2.pkl', 'rb'))
model_isl = model_isl_dict['model']

# MediaPipe hands setup
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
hands = mp_hands.Hands(static_image_mode=False, min_detection_confidence=0.3)

labels_dict = {
    "A": "A", "B": "B", "C": "C", "D": "D", "E": "E", "F": "F", "G": "G", "H": "H", "I": "I", "J": "J",
    "K": "K", "L": "L", "M": "M", "N": "N", "O": "O", "P": "P", "Q": "Q", "R": "R", "S": "S", "T": "T",
    "U": "U", "V": "V", "W": "W", "X": "X", "Y": "Y", "Z": "Z",
    "space": " ", "nothing": ""
}

predicted_text = ""
current_model = None
current_labels_dict = None

# Sample word list
suggestion_words = [
    # A
    'APPLE', 'ASK', 'ARE', 'ANY', 'ALWAYS', 'AM', 'ABOUT','AN','AWAY',

    # B
    'BOY', 'BACK', 'BALL', 'BRING', 'BOOK', 'BIG',

    # C
    'CAT', 'CAN', 'COME', 'CALL', 'COULD', 'CARE',

    # D
    'DO', 'DOING', 'DID', 'DOES', 'DAY', 'DONE','DOCTOR','DOG',

    # E
    'EAT', 'END', 'EVERY', 'EASY', 'ENOUGH', 'ELSE',

    # F
    'FOOD', 'FIND', 'FUN', 'FEEL', 'FAST', 'FRIEND',

    # G
    'GO', 'GET', 'GIVE', 'GOOD', 'GREAT', 'GIRL','GAME',

    # H
    'HELLO', 'HELP', 'HOW', 'HAVE', 'HAPPY', 'HERE',

    # I
    'I', 'IN', 'IS', 'IT', 'INTO', 'IDEA',

    # J
    'JUMP', 'JUST', 'JOIN', 'JOB', 'JOKE', 'JOY',

    # K
    'KITE', 'KEEPS', 'KNOW', 'KIND', 'KICK', 'KING','KEEP',

    # L
    'LOVE', 'LIKE', 'LOOK', 'LET', 'LONG', 'LIVE',

    # M
    'MAN', 'ME', 'MY', 'MAKE', 'MORE', 'MOTHER',

    # N
    'NO', 'NOT', 'NEED', 'NAME', 'NEAR', 'NEW',

    # O
    'OKAY', 'ON', 'OUT', 'OPEN', 'OVER', 'ONLY',

    # P
    'PLAY', 'PUT', 'PLEASE', 'PEOPLE', 'PART', 'PICK',

    # Q
    'QUIT', 'QUICK', 'QUIET', 'QUEEN', 'QUESTION',

    # R
    'RUN', 'READ', 'RIDE', 'RED', 'RIGHT', 'REALLY',

    # S
    'SEE', 'SAY', 'SOME', 'SHE', 'STOP', 'START', 'SCHOOL',

    # T
    'TO', 'THE', 'THIS', 'THAT', 'TAKE', 'THANK', 'TALK',

    # U
    'UNIVERSITY', 'UP', 'USE', 'US', 'UNTIL', 'USUALLY','UNDER',

    # V
    'VERY', 'VOICE', 'VISIT', 'VIDEO', 'VILLAGE', 'VAN',

    # W
    'WE', 'WILL', 'WHAT', 'WHY', 'WHERE', 'WANT', 'WHO',

    # X
    'XRAY', 'XYLOPHONE', 'XEROX', 'XMAS', 'XENON',

    # Y
    'YES', 'YOU', 'YOUR', 'YELLOW', 'YESTERDAY', 'YOUNG',

    # Z
    'ZEBRA', 'ZIP', 'ZERO', 'ZONE', 'ZOOM'
]


@app.route('/')
def main_menu():
    return render_template('main.html')

@app.route('/asl')
def asl_page():
    global current_model, current_labels_dict
    current_model = model_asl
    current_labels_dict = labels_dict
    return render_template('index.html', language="AMERICAN SIGN LANGUAGE")

@app.route('/isl')
def isl_page():
    global current_model, current_labels_dict
    current_model = model_isl
    current_labels_dict = labels_dict
    return render_template('index.html', language="INDIAN SIGN LANGUAGE")

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

def generate_frames():
    global predicted_text, current_model, current_labels_dict
    cap = cv.VideoCapture(0)
    prev_sign = None
    start_time = None
    detection_threshold = 1

    while True:
        data_aux = []
        x_, y_ = [], []
        ret, frame = cap.read()
        if not ret:
            break
        H, W, _ = frame.shape
        frame_rgb = cv.cvtColor(frame, cv.COLOR_BGR2RGB)
        results = hands.process(frame_rgb)

        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                mp_drawing.draw_landmarks(
                    frame, hand_landmarks, mp_hands.HAND_CONNECTIONS,
                    mp_drawing_styles.get_default_hand_landmarks_style(),
                    mp_drawing_styles.get_default_hand_connections_style()
                )
                for i in range(len(hand_landmarks.landmark)):
                    x = hand_landmarks.landmark[i].x
                    y = hand_landmarks.landmark[i].y
                    data_aux.append(x)
                    data_aux.append(y)
                    x_.append(x)
                    y_.append(y)

            x1, y1 = int(min(x_) * W), int(min(y_) * H)
            x2, y2 = int(max(x_) * W), int(max(y_) * H)

            if len(data_aux) == 42:
                data_aux.extend([0] * 42)
            elif len(data_aux) > 84:
                data_aux = data_aux[:84]

            prediction = current_model.predict([np.asarray(data_aux)])
            predicted_character = current_labels_dict[str(prediction[0])]

            cv.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 0), 4)
            cv.putText(frame, predicted_character, (x1, y1), cv.FONT_HERSHEY_SIMPLEX, 1.3, (0, 255, 0), 3)

            if predicted_character == prev_sign:
                if start_time is None:
                    start_time = time.time()
                elif time.time() - start_time >= detection_threshold:
                    predicted_text += predicted_character
                    start_time = None
            else:
                prev_sign = predicted_character
                start_time = None

        ret, buffer = cv.imencode('.jpg', frame)
        frame = buffer.tobytes()
        yield (b'--frame\r\nContent-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    cap.release()
    cv.destroyAllWindows()

@app.route('/clear_last_character', methods=['POST'])
def clear_last_character():
    global predicted_text
    if predicted_text:
        predicted_text = predicted_text[:-1]
    return jsonify(predicted_text=predicted_text)

@app.route('/speak_sentence', methods=['POST'])
def speak_sentence():
    global predicted_text
    try:
        data = request.get_json()
        speed = float(data.get('speed', 1.0))  # Convert to float and default to 1.0
        
        # Validate speed is within reasonable bounds
        speed = max(0.5, min(2.0, speed))
        
        engine = pyttsx3.init()
        
        # Get current rate and adjust based on speed
        current_rate = engine.getProperty('rate')
        new_rate = int(current_rate * speed)
        
        # Set the new rate
        engine.setProperty('rate', new_rate)
        
        # Speak the text
        engine.say(predicted_text)
        engine.runAndWait()
        
        return '', 204
    except Exception as e:
        print(f"Error in speak_sentence: {str(e)}")
        return jsonify(error="Failed to process speech"), 500

@app.route('/clear_sentence', methods=['POST'])
def clear_sentence():
    global predicted_text
    predicted_text = ""
    return jsonify(success=True)

@app.route('/get_predicted_text', methods=['GET'])
def get_predicted_text():
    return jsonify(predicted_text=predicted_text)

@app.route('/add_space', methods=['POST'])
def add_space():
    global predicted_text
    predicted_text += " "
    return jsonify(predicted_text=predicted_text)

@app.route('/get_suggestions', methods=['GET'])
def get_suggestions():
    global predicted_text, suggestion_words
    last_word = predicted_text.strip().split(' ')[-1].upper()
    suggestions = [word for word in suggestion_words if word.startswith(last_word)]
    return jsonify(suggestions=suggestions[:5])

# # ✅ UPDATED: fuzzy matching suggestion route
# @app.route('/get_suggestions', methods=['GET'])
# def get_suggestions():
#     global predicted_text, suggestion_words
#     last_word = predicted_text.strip().split(' ')[-1].upper()

#     suggestions = difflib.get_close_matches(last_word, suggestion_words, n=5, cutoff=0.6)
#     return jsonify(suggestions=suggestions)

@app.route('/set_predicted_text', methods=['POST'])
def set_predicted_text():
    global predicted_text
    data = request.get_json()
    predicted_text = data.get('text', predicted_text)
    return jsonify(success=True)

@app.route('/learn')
def learn_page():
    return render_template('learn.html')

if __name__ == '__main__':
    app.run(debug=True)
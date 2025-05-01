// Learning module data
const learningData = {
    asl: {
        alphabet: [
            { letter: 'A', description: 'Make a fist with your thumb on the side', image: '/static/images/asl/A.jpg' },
            { letter: 'B', description: 'Hold your hand straight up with fingers together', image: '/static/images/asl/B.jpg' },
            { letter: 'C', description: 'Curve your hand into a C shape', image: '/static/images/asl/C.jpg' },
            { letter: 'D', description: 'Point your index finger up', image: '/static/images/asl/D.jpg' },
            { letter: 'E', description: 'Bend all fingers down to touch the thumb', image: '/static/images/asl/E.jpg' },
            { letter: 'F', description: 'Touch your thumb and index finger, extend other fingers', image: '/static/images/asl/F.jpg' },
            { letter: 'G', description: 'Point your index finger to the side', image: '/static/images/asl/G.jpg' },
            { letter: 'H', description: 'Point your index and middle fingers to the side', image: '/static/images/asl/H.jpg' },
            { letter: 'I', description: 'Point your pinky finger up', image: '/static/images/asl/I.jpg' },
            { letter: 'J', description: 'Point your pinky finger up and trace a J in the air', image: '/static/images/asl/J.jpg' },
            { letter: 'K', description: 'Point your index and middle fingers up in a V shape', image: '/static/images/asl/K.jpg' },
            { letter: 'L', description: 'Extend your thumb and index finger to form an L', image: '/static/images/asl/L.jpg' },
            { letter: 'M', description: 'Place your thumb between your index and middle fingers', image: '/static/images/asl/M.jpg' },
            { letter: 'N', description: 'Place your thumb between your index and middle fingers, but closer to index', image: '/static/images/asl/N.jpg' },
            { letter: 'O', description: 'Curve your fingers to form an O shape', image: '/static/images/asl/O.jpg' },
            { letter: 'P', description: 'Point your index finger down', image: '/static/images/asl/P.jpg' },
            { letter: 'Q', description: 'Point your index finger down and to the side', image: '/static/images/asl/Q.jpg' },
            { letter: 'R', description: 'Cross your index and middle fingers', image: '/static/images/asl/R.jpg' },
            { letter: 'S', description: 'Make a fist', image: '/static/images/asl/S.jpg' },
            { letter: 'T', description: 'Place your thumb between your index and middle fingers', image: '/static/images/asl/T.jpg' },
            { letter: 'U', description: 'Point your index and middle fingers up together', image: '/static/images/asl/U.jpg' },
            { letter: 'V', description: 'Point your index and middle fingers up in a V shape', image: '/static/images/asl/V.jpg' },
            { letter: 'W', description: 'Point your index, middle, and ring fingers up', image: '/static/images/asl/W.jpg' },
            { letter: 'X', description: 'Bend your index finger', image: '/static/images/asl/X.jpg' },
            { letter: 'Y', description: 'Point your thumb and pinky finger out', image: '/static/images/asl/Y.jpg' },
            { letter: 'Z', description: 'Point your index finger and trace a Z in the air', image: '/static/images/asl/Z.jpg' }
        ],
        'common-words': [],
        phrases: []
    },
    isl: {
        alphabet: [
            { letter: 'A', description: 'Both hands clenched into fists and joined at the knuckles — like two "mountains" touching', image: '/static/images/isl/A.jpg' },
            { letter: 'B', description: 'Thumb and index fingers of both hands touch to form two "O" shapes, joined together like a pair of glasses', image: '/static/images/isl/B.jpg' },
            { letter: 'C', description: 'Right hand makes a "C" shape with fingers slightly curved, palm facing outward', image: '/static/images/isl/C.jpg' },
            { letter: 'D', description: 'Right hand forms a circle (index touching thumb), other fingers straight and extended up, forming a "D"', image: '/static/images/isl/D.jpg' },
            { letter: 'E', description: 'Both hands — right index finger extended, placed on top of the left hand (which is flat) forming an "E" shape', image: '/static/images/isl/E.jpg' },
            { letter: 'F', description: 'Right index finger laid horizontally on top of left index finger, forming a cross', image: '/static/images/isl/F.jpg' },
            { letter: 'G', description: 'Both fists closed, right fist placed on top of the left — similar to gripping a tool', image: '/static/images/isl/G.jpg' },
            { letter: 'H', description: 'Right flat palm placed vertically on the left palm, forming a cross-like "H"', image: '/static/images/isl/H.jpg' },
            { letter: 'I', description: 'Right hand\'s little finger raised, rest of the fingers curled in — pinky only', image: '/static/images/isl/I.jpg' },
            { letter: 'J', description: 'Right pinky draws a "J" shape in the air', image: '/static/images/isl/J.jpg' },
            { letter: 'K', description: 'Right hand forms a "peace" (V) sign, index and middle raised and separated', image: '/static/images/isl/K.jpg' },
            { letter: 'L', description: 'Right hand forms an "L" with the thumb and index finger', image: '/static/images/isl/L.jpg' },
            { letter: 'M', description: 'Left hand horizontal; right hand forms three fingers and rests over it — representing the "M" humps', image: '/static/images/isl/M.jpg' },
            { letter: 'N', description: 'Same as "M", but right hand shows only two fingers on top of the left palm — like the letter "n"', image: '/static/images/isl/N.jpg' },
            { letter: 'O', description: 'Right hand forms a full "O" using all fingers brought together — palm facing outward', image: '/static/images/isl/O.jpg' },
            { letter: 'P', description: 'Right hand: index and thumb form a circle, other fingers curved in', image: '/static/images/isl/P.jpg' },
            { letter: 'Q', description: 'Right hand: Index finger and thumb pointed downward, fingers curved to form a "Q"', image: '/static/images/isl/Q.jpg' },
            { letter: 'R', description: 'Right index and middle fingers crossed — like a twist or an "X"', image: '/static/images/isl/R.jpg' },
            { letter: 'S', description: 'Right hand in a fist, left hand wraps around it slightly — clenched hands gesture', image: '/static/images/isl/S.jpg' },
            { letter: 'T', description: 'Right index finger pointed horizontally on top of vertical left index finger, forming a "T" shape', image: '/static/images/isl/T.jpg' },
            { letter: 'U', description: 'Right hand: Index and middle fingers raised and held together — like rabbit ears', image: '/static/images/isl/U.jpg' },
            { letter: 'V', description: 'Same as "U" but fingers are spread in a "V" shape', image: '/static/images/isl/V.jpg' },
            { letter: 'W', description: 'Three fingers raised (index, middle, ring) to form a "W"', image: '/static/images/isl/W.jpg' },
            { letter: 'X', description: 'Index fingers of both hands cross each other to form an "X"', image: '/static/images/isl/X.jpg' },
            { letter: 'Y', description: 'Thumb and pinky finger extended (others folded in), palm forward', image: '/static/images/isl/Y.jpg' },
            { letter: 'Z', description: 'Right index finger draws a "Z" shape in the air', image: '/static/images/isl/Z.jpg' }
        ],
        'common-words': [],
        phrases: []
    }
};

// User progress tracking
let userProgress = {
    asl: {
        alphabet: 0,
        'common-words': 0,
        phrases: 0
    },
    isl: {
        alphabet: 0,
        'common-words': 0,
        phrases: 0
    }
};

// Load progress from localStorage
function loadProgress() {
    const savedProgress = localStorage.getItem('signLanguageProgress');
    if (savedProgress) {
        userProgress = JSON.parse(savedProgress);
        updateProgressUI();
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('signLanguageProgress', JSON.stringify(userProgress));
    updateProgressUI();
}

// Update progress UI
function updateProgressUI() {
    const currentLanguage = document.querySelector('input[name="language"]:checked').value;
    
    // Update category progress
    document.getElementById('alphabet-progress').textContent = 
        `${Math.round((userProgress[currentLanguage].alphabet / learningData[currentLanguage].alphabet.length) * 100)}%`;
    document.getElementById('words-progress').textContent = '0%';
    document.getElementById('phrases-progress').textContent = '0%';
    
    // Update overall progress
    const totalProgress = (
        userProgress[currentLanguage].alphabet
    ) / (
        learningData[currentLanguage].alphabet.length
    ) * 100;
    
    document.querySelector('.progress-section .progress-bar').style.width = `${totalProgress}%`;
    document.querySelector('.progress-section .progress-bar').textContent = `${Math.round(totalProgress)}%`;
}

// Load category content
function loadCategory(category) {
    const language = document.querySelector('input[name="language"]:checked').value;
    const content = document.getElementById('learning-content');
    content.innerHTML = '';

    if (category === 'alphabet') {
        const signs = language === 'asl' ? learningData.asl.alphabet : learningData.isl.alphabet;
        signs.forEach((sign, index) => {
            const card = document.createElement('div');
            card.className = 'sign-card';
            card.innerHTML = `
                <h3>${sign.letter}</h3>
                <img src="${sign.image}" alt="${sign.letter}" class="img-fluid mb-3">
                <p>${sign.description}</p>
            `;
            content.appendChild(card);
        });
    }
}

// Quiz functionality
let currentQuiz = null;
let quizScore = 0;
let quizTotal = 0;

function startQuiz(category) {
    const currentLanguage = document.querySelector('input[name="language"]:checked').value;
    const content = learningData[currentLanguage][category];
    
    if (content.length === 0) {
        alert('No content available for this category yet.');
        return;
    }
    
    // Create a quiz with 5 random questions
    currentQuiz = [];
    quizScore = 0;
    quizTotal = Math.min(5, content.length);
    
    // Shuffle the content
    const shuffledContent = [...content].sort(() => Math.random() - 0.5);
    
    // Create quiz questions
    for (let i = 0; i < quizTotal; i++) {
        const correctAnswer = shuffledContent[i];
        const options = [correctAnswer];
        
        // Add 3 random incorrect options
        while (options.length < 4) {
            const randomIndex = Math.floor(Math.random() * content.length);
            const randomOption = content[randomIndex];
            
            // Make sure we don't add the same option twice
            if (!options.some(opt => opt.letter === randomOption.letter)) {
                options.push(randomOption);
            }
        }
        
        // Shuffle the options
        options.sort(() => Math.random() - 0.5);
        
        currentQuiz.push({
            question: `What is the sign for the letter "${correctAnswer.letter}"?`,
            options: options,
            correctIndex: options.findIndex(opt => opt.letter === correctAnswer.letter)
        });
    }
    
    // Display the first question
    displayQuizQuestion(0);
}

function displayQuizQuestion(index) {
    if (!currentQuiz || index >= currentQuiz.length) {
        showQuizResults();
        return;
    }
    
    const question = currentQuiz[index];
    const contentDiv = document.getElementById('learning-content');
    
    let html = `
        <div class="quiz-container">
            <h2 class="mb-4">Quiz Question ${index + 1} of ${currentQuiz.length}</h2>
            <div class="card mb-4">
                <div class="card-body">
                    <h3 class="card-title">${question.question}</h3>
                    <div class="row mt-4">
    `;
    
    question.options.forEach((option, optionIndex) => {
        html += `
            <div class="col-md-6 mb-3">
                <div class="card">
                    <div class="card-body">
                        <img src="${option.image}" alt="Option ${optionIndex + 1}" class="img-fluid mb-3">
                        <button class="btn btn-outline-primary w-100" onclick="checkAnswer(${index}, ${optionIndex})">
                            Option ${optionIndex + 1}
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `
                    </div>
                </div>
            </div>
            <div class="progress mb-3">
                <div class="progress-bar" role="progressbar" style="width: ${(index / currentQuiz.length) * 100}%"></div>
            </div>
        </div>
    `;
    
    contentDiv.innerHTML = html;
}

function checkAnswer(questionIndex, selectedIndex) {
    const question = currentQuiz[questionIndex];
    
    if (selectedIndex === question.correctIndex) {
        quizScore++;
        alert('Correct! Well done!');
    } else {
        alert(`Incorrect. The correct answer was option ${question.correctIndex + 1}.`);
    }
    
    // Move to the next question
    displayQuizQuestion(questionIndex + 1);
}

function showQuizResults() {
    const contentDiv = document.getElementById('learning-content');
    const percentage = Math.round((quizScore / quizTotal) * 100);
    
    let message = '';
    if (percentage >= 80) {
        message = 'Excellent! You are a natural!';
    } else if (percentage >= 60) {
        message = 'Good job! Keep practicing!';
    } else {
        message = 'Keep practicing, you\'ll get better!';
    }
    
    let html = `
        <div class="quiz-results text-center">
            <h2 class="mb-4">Quiz Results</h2>
            <div class="card mb-4">
                <div class="card-body">
                    <h3>You scored ${quizScore} out of ${quizTotal} (${percentage}%)</h3>
                    <p class="lead">${message}</p>
                    <div class="progress mb-3">
                        <div class="progress-bar" role="progressbar" style="width: ${percentage}%"></div>
                    </div>
                    <button class="btn btn-primary" onclick="loadCategory('alphabet')">Back to Learning</button>
                    <button class="btn btn-success" onclick="startQuiz('alphabet')">Try Again</button>
                </div>
            </div>
        </div>
    `;
    
    contentDiv.innerHTML = html;
    
    // Update progress
    const currentLanguage = document.querySelector('input[name="language"]:checked').value;
    if (quizScore >= 3) { // If they got at least 3 correct
        userProgress[currentLanguage].alphabet = Math.max(userProgress[currentLanguage].alphabet, 1);
        saveProgress();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    
    // Language selection change
    document.querySelectorAll('input[name="language"]').forEach(radio => {
        radio.addEventListener('change', () => {
            updateProgressUI();
            if (document.getElementById('learning-content').children.length > 0) {
                loadCategory('alphabet');
            }
        });
    });
}); 
// Array of Valentine's Day-themed questions
const questions = [
    "What’s your favorite memory of us?",
    "If we could go anywhere right now, where would you want to go?",
    "What’s one thing you love about me?",
    "What’s your dream date night?",
    "What’s the most romantic thing I’ve ever done for you?",
    "If we could relive one day together, which day would it be?",
    "What’s your favorite thing about our relationship?",
    "What’s one thing you’d like us to try together?",
    "What’s the first thing you noticed about me?",
    "What’s your favorite way to spend time with me?"
];

// Get DOM elements
const questionText = document.getElementById('question-text');
const generateBtn = document.getElementById('generate-btn');

// Function to generate a random question
function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    questionText.textContent = questions[randomIndex];
}

// Event listener for the button
generateBtn.addEventListener('click', generateQuestion);

// Generate a question on page load
generateQuestion();
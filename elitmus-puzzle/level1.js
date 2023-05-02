

const form = document.querySelector('form');
const answerInput = document.querySelector('#answer');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const answer = answerInput.value.trim().toLowerCase();
    if (answer === '18') {
        alert('Congratulations! Your answer is correct.');
        var score = {
            value: 1
        }
        window.location.href = 'level3.html';
    } else {
        alert('Sorry, your answer is incorrect. Please try again.');
    }
});
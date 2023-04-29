import './styles.css';
import Score from './modules/scores.js';

const newScore = new Score();
const addScore = document.querySelector('.input-form');

addScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = addScore.name.value;
  const scoreNumber = addScore.score.value;
  newScore.addScore({ user, scoreNumber });
  addScore.reset();
});

const refreshScore = document.getElementById('refresh-score');
refreshScore.addEventListener('click', newScore.getData);
document.addEventListener('DOMContentLoaded', newScore.displayScore);

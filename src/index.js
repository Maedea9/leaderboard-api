import './styles.css';
import Score from './modules/scores.js';

const addScore = document.querySelector('.input-form');

addScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const newScore = new Score();
  const name = addScore.name.value;
  const scoreNum = addScore.score.value;
  newScore.addScore({ name, scoreNum });

  addScore.name.value = '';
  addScore.score.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  newScore.displayScore();
});
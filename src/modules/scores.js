// creating a class Score//
class Score {
  constructor(name, score, id) {
    this.name = name;
    this.score = score;
    this.id = id;
  }

    // hardList//
    scoreData = JSON.parse(localStorage.getItem('scores')) || [
      {
        name: 'X',
        score: 100,
        id: 1,
      },
      {
        name: 'Y',
        score: 150,
        id: 2,
      },
      {
        name: 'Z',
        score: 300,
        id: 3,
      },
      {
        name: 'A',
        score: 500,
        id: 4,
      },
      {
        name: 'B',
        score: 10,
        id: 5,
      },
    ]

// displaying scores//
displayScore = () => {
  const scoresContainer = document.getElementById('scores');
  scoresContainer.innerHTML = this.scoreData.map((element) => `<li class="score-item"}>${element.name} : ${element.score}</li>`).join('');
}

  /* Add a new Score */
  addScore=({ name, scoreNum }) => {
    const newScore = {
        id: this.scoreData.length + 1,
        name,
        score: scoreNum,
      };
      this.scoreData.push(newScore);
      this.saveScore(newScore);
      this.displayScore();
    }
 //saves score to localStorage//
    saveScore = (score) => {
        const scores = JSON.parse(localStorage.getItem('scores')) || [];
        scores.push(score);
        localStorage.setItem('scores', JSON.stringify(scores));
      }
    }


export default Score;
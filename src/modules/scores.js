// creating a class Score//
class Score {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  // empty array for API data
apiData = [];

// api url with unique id
apiId = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a0PqUQ9ych94KMvwDjJn/scores/';

// displaying scores//
displayScore = () => {
  const scoresCont = document.getElementById('scores');
  scoresCont.innerHTML = this.apiData.map((element) => `<li class="score-item"}>${element.user} : ${element.score}</li>`).join('');
}

// get data from the api
getData = async () => {
  try {
    const data = await fetch(this.apiId);
    const response = await data.json();
    this.apiData = [];
    response.result.map((element) => this.apiData.push(element));
    return this.displayScore();
  } catch (error) {
    return error;
  }
};

// add new score to the api
addScore = async ({ user, scoreNumber }) => {
  try {
    const params = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, score: scoreNumber }),
    };

    const data = await fetch(this.apiId, params);
    const response = await data.json();
    this.apiData.push(response);
    return this.getData();
  } catch (error) {
    return error;
  }
};
}

export default Score;
export default class ScoreStore {
  baseAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

  endPoint = '/scores/';

  gameID = 'yoHtSCwzSCh7CG99zfdN';

  constructor() {
    this.scoresArray = [];
  }

  // Get data from API
  async getScores() {
    const response = await fetch(`${this.baseAPI}${this.gameID}${this.endPoint}`);
    const { result } = await response.json();
    this.scoresArray = result;
  }

  // Add score to scoresArray
  async addScore(_score, _user) {
    const response = await fetch(`${this.baseAPI}${this.gameID}${this.endPoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: _user,
        score: _score,
      }),
    });
    return response.json();
  }

  // render
  render() {
    let content = '';
    this.scoresArray.forEach((scoreItem) => {
      content += `<tr><td>${scoreItem.user}: </td><td>${scoreItem.score}</td></tr>`;
    });
    return content;
  }
}

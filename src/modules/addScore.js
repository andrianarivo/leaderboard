import { inputScore, inputUser, tbody } from './DOMLoader.js';
import ScoreStore from './ScoreStore.js';

const addScore = async () => {
  const scoreStore = new ScoreStore();
  const user = inputUser.value;
  const score = inputScore.value;

  await scoreStore.addScore(score, user);

  inputUser.value = '';
  inputScore.value = '';
  tbody.innerHTML = scoreStore.render();
};

export default addScore;

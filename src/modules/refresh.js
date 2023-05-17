import { tbody } from './DOMLoader.js';
import ScoreStore from './ScoreStore.js';

const refresh = async () => {
  const scoreStore = new ScoreStore();

  await scoreStore.getScores();

  tbody.innerHTML = scoreStore.render();
};

export default refresh;

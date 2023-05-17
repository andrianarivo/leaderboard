import { btnAddScore, refreshBtn } from './modules/DOMLoader.js';
import addScore from './modules/addScore.js';
import refresh from './modules/refresh.js';
import './style.scss';

refreshBtn.addEventListener('click', () => {
  refresh();
});

window.onload = () => {
  refresh();
};

btnAddScore.addEventListener('click', async () => {
  await addScore();
  await refresh();
});

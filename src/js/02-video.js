import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function fillLocalStorage(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

player.on('timeupdate', throttle(fillLocalStorage, 1000));


const currentTime = localStorage.getItem(STORAGE_KEY);

player.setCurrentTime(currentTime || 0);






// if (currentTime !== null) {
//   player.setCurrentTime(currentTime);
// }
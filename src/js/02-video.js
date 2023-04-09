import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const STORAGE_KEY = "videoplayer-current-time";

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

 player.on('timeupdate', throttle(function(data) {
     localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
 }),1000); 


player.setCurrentTime(30.456).then(function(seconds) {
    localStorage.getItem(STORAGE_KEY);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});





// const audio = document.getElementById('audio');
// const play = document.getElementById('play');
// const pause = document.getElementById('pause');
// const stop = document.getElementById('stop');
// const currentTime = document.getElementById('current-time');
// const volume = document.getElementById('volume');

// play.addEventListener('click', () => audio.play());
// pause.addEventListener('click', () => audio.pause());
// stop.addEventListener('click', () => {
//     audio.pause();
//     audio.currentTime = 0;  //pause then reset the current time prop

// });

// //adds eventlistener to show the current time updates
// audio.addEventListener('timeupdate', () => {
//     currentTime.innerHTML = audio.currentTime;
// });

// //adds eventlistener to show the volume range
// volume.addEventListener('change', () => (audio.volume = volume.value));

const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs = ['her', 'summer', 'ukulele']; //song titles

//keep track of song
let songIndex = 2;

//initially load song details
loadSong(songs[songIndex]);

function loadSong(song) {
 title.innerText = song;
 audio.src = `music/${song}.mp3`;
 cover.src = `images/${song}.jpg`;
}

//creating playSong function
function playSong () {
    musicContainer.classList.add('play');
}
//creating pauseSong function


//play song if it's paused otherwise play song
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();   
    } else {
        playSong();
    }
});

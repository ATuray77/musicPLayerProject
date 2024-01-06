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

const songs = ['hey', 'summer', 'ukulele']; //song titles

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
    musicContainer.classList.add('play'); //adds class of play
    playBtn.querySelector('i.fas').classList.remove('fa-play');//removes play button
    playBtn.querySelector('i.fas').classList.add('fa-pause');//adds pause button
    audio.play(); //play the audio
}
//creating pauseSong function
function pauseSong () {
    musicContainer.classList.remove('play'); //removes class of play
    playBtn.querySelector('i.fas').classList.add('fa-play');//adds play
    playBtn.querySelector('i.fas').classList.remove('fa-pause');//removes pause
    audio.pause(); //pause the audio
}

//creates prevSong function
function prevSong() {
    songIndex--; //going backwards

    if (songIndex < 0) {  //if we are at the first song and click prev we want to go to the last song
       songIndex = songs.length - 1 // go to the last song
    }

    loadSong(songs[songIndex]);

    playSong();
}

//creates nextSong function
function nextSong() {
    songIndex++; //going forward

    if (songIndex > songs.length -1) {  //if we are at the last song and press next
       songIndex = 0; //this takes us to the first song
    }

    loadSong(songs[songIndex]);

    playSong();
}

//function to to update the progress
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}
//play song if it's paused otherwise play song
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();   
    } else {
        playSong();
    }
});

//activates previous button
prevBtn.addEventListener('click', prevSong)

//activates next button
nextBtn.addEventListener('click', nextSong)

//activate the progress bar
audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress)


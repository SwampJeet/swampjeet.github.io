const audioPlayer = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');
const currentSongDisplay = document.getElementById('currentSong');

// List of songs
const songs = [
    { title: 'English Broadcast', src: 'English.mp3' },
    { title: 'Spanish Broadcast', src: '/Spanish.mp3' },
    { title: 'Song 3', src: 'filler test' }
];

let currentSongIndex = 0;

// Load playlist
songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.dataset.index = index;
    li.onclick = () => playSong(index);
    playlist.appendChild(li);
});

function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = songs[index].src;
    currentSongDisplay.textContent = songs[index].title;
    audioPlayer.play();
}

function playAudio() {
    if (!audioPlayer.src) {
        playSong(0);
    } else {
        audioPlayer.play();
    }
}

function pauseAudio() {
    audioPlayer.pause();
}

function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
}
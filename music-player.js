const audioPlayer = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');

// List of songs
const songs = [
    { title: 'Song 1', src: 'audio/song1.mp3' },
    { title: 'Song 2', src: 'audio/song2.mp3' },
    { title: 'Song 3', src: 'audio/song3.mp3' }
];

// Load playlist
songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.dataset.index = index;
    li.onclick = () => playSong(index);
    playlist.appendChild(li);
});

function playSong(index) {
    audioPlayer.src = songs[index].src;
    audioPlayer.play();
}

function playAudio() {
    audioPlayer.play();
}

function pauseAudio() {
    audioPlayer.pause();
}

function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

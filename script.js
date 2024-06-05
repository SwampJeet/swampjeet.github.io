// script.js

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const stopButton = document.getElementById('stop');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const shuffleButton = document.getElementById('shuffle');
    const songTitle = document.getElementById('song-title');
    const playlistItems = document.querySelectorAll('#playlist-list li');
    const kbps = document.getElementById('kbps');
    const khz = document.getElementById('khz');
    const mode = document.getElementById('mode');

    let currentSongIndex = 0;
    let isPlaying = false;

    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playPauseButton.querySelector('img').src = 'icons/play.png';
        } else {
            audio.play();
            playPauseButton.querySelector('img').src = 'icons/pause.png';
        }
        isPlaying = !isPlaying;
    });

    stopButton.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        playPauseButton.querySelector('img').src = 'icons/play.png';
        isPlaying = false;
    });

    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + playlistItems.length) % playlistItems.length;
        loadSong(currentSongIndex);
        audio.play();
        playPauseButton.querySelector('img').src = 'icons/pause.png';
        isPlaying = true;
    });

    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
        loadSong(currentSongIndex);
        audio.play();
        playPauseButton.querySelector('img').src = 'icons/pause.png';
        isPlaying = true;
    });

    shuffleButton.addEventListener('click', () => {
        currentSongIndex = Math.floor(Math.random() * playlistItems.length);
        loadSong(currentSongIndex);
        audio.play();
        playPauseButton.querySelector('img').src = 'icons/pause.png';
        isPlaying = true;
    });

    playlistItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            loadSong(index);
            audio.play();
            playPauseButton.querySelector('img').src = 'icons/pause.png';
            isPlaying = true;
        });
    });

    audio.addEventListener('loadedmetadata', () => {
        kbps.textContent = '128 kbps';
        khz.textContent = '44.1 kHz';
        mode.textContent = 'stereo';
    });

    audio.addEventListener('ended', () => {
        nextSong();
    });

    function loadSong(index) {
        const song = playlistItems[index].getAttribute('data-src');
        audio.src = song;
        songTitle.textContent = playlistItems[index].textContent;
        currentSongIndex = index;
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
        loadSong(currentSongIndex);
        audio.play();
    }
});

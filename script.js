// script.js

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const stopButton = document.getElementById('stop');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const songTitle = document.getElementById('song-title');
    const playlistItems = document.querySelectorAll('#playlist-list li');
    const progress = document.getElementById('progress');

    let currentSongIndex = 0;
    let isPlaying = false;

    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playPauseButton.textContent = 'Play';
        } else {
            audio.play();
            playPauseButton.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    });

    stopButton.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        playPauseButton.textContent = 'Play';
        isPlaying = false;
    });

    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + playlistItems.length) % playlistItems.length;
        loadSong(currentSongIndex);
        audio.play();
        playPauseButton.textContent = 'Pause';
        isPlaying = true;
    });

    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
        loadSong(currentSongIndex);
        audio.play();
        playPauseButton.textContent = 'Pause';
        isPlaying = true;
    });

    playlistItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            loadSong(index);
            audio.play();
            playPauseButton.textContent = 'Pause';
            isPlaying = true;
        });
    });

    audio.addEventListener('timeupdate', () => {
        progress.value = (audio.currentTime / audio.duration) * 100;
    });

    progress.addEventListener('input', () => {
        audio.currentTime = (progress.value / 100) * audio.duration;
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

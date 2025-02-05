// function togglePlay(playerId) {
//     const audio = document.getElementById(`audio-player-${playerId}`);
//     const playIcon = document.getElementById(`play-icon-${playerId}`);
//     const pauseIcon = document.getElementById(`pause-icon-${playerId}`);
    
//     if (audio.paused) {
//         audio.play();
//         playIcon.style.display = 'none';
//         pauseIcon.style.display = 'inline';
//     } else {
//         audio.pause();
//         playIcon.style.display = 'inline';
//         pauseIcon.style.display = 'none';
//     }
// }

// document.querySelectorAll('audio').forEach(audio => {
//     audio.addEventListener('ended', () => {
//         const playerId = audio.id.split('-').pop();
//         document.getElementById(`play-icon-${playerId}`).style.display = 'inline';
//         document.getElementById(`pause-icon-${playerId}`).style.display = 'none';
//     });
// });







function togglePlay(playerId) {
    const audio = document.getElementById(`audio-player-${playerId}`);
    const playIcon = document.getElementById(`play-icon-${playerId}`);
    const pauseIcon = document.getElementById(`pause-icon-${playerId}`);
    
    // Pause all other audio elements
    document.querySelectorAll('audio').forEach((audioElement) => {
        if (audioElement !== audio) {
            audioElement.pause();
            const otherPlayerId = audioElement.id.split('-').pop();
            document.getElementById(`play-icon-${otherPlayerId}`).style.display = 'inline';
            document.getElementById(`pause-icon-${otherPlayerId}`).style.display = 'none';
        }
    });

    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    } else {
        audio.pause();
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    }
}

// Optional: Update button state when audio ends
document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('ended', () => {
        const playerId = audio.id.split('-').pop();
        document.getElementById(`play-icon-${playerId}`).style.display = 'inline';
        document.getElementById(`pause-icon-${playerId}`).style.display = 'none';
    });
});
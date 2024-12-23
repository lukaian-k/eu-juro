document.addEventListener('DOMContentLoaded', () => {
  const lines = document.querySelectorAll('.line');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const audio = document.getElementById('background-audio');

  let isPlaying = false;
  playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      playPauseBtn.textContent = 'Clique aqui 🥺';
    } else {
      audio.play();
      playPauseBtn.textContent = 'Nossa música! 💖';
    }
    isPlaying = !isPlaying;
  });

  let delay = 500;
  lines.forEach((line) => {
    setTimeout(() => {
      line.classList.add('visible');
    }, delay);
    delay += 2000;
  });
});

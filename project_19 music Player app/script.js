let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playBtn = document.getElementById("playBtn");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
//play pause btn
let isPlaying = false; // Track the current playback state

playBtn.addEventListener("click", () => {
  isPlaying = !isPlaying; // Toggle isPlaying state on each click

  if (isPlaying) {
    playBtn.src = "./img/pause-circle-fill.svg";
    song.play(); // Play the song if image is switched to pause icon
    isPlaying = true;
  } else {
    playBtn.src = "./img/play-circle-fill.svg";
    song.pause(); // Pause the song if image is switched to play icon
    isPlaying = false;
  }
});
//range bar
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
progress.onchange =function(){
    song.play();
    song.currentTime = progress.value;
    playBtn.src = "./img/pause-circle-fill.svg";
    isPlaying = true;
}
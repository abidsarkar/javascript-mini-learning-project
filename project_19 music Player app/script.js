let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playBtn = document.getElementById("playBtn");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
playBtn.addEventListener("click", () => {
    
});

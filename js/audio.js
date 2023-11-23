
const button = document.getElementById("window1");
const audio1 = document.getElementById("rain")

window1.onclick = (event) => {
    if (audio1.paused == true) {
        // playingAudio = 1
        audio1.play();
        // Here is an else statement This happens when the past if statement isnt true. So if the audio is playing, it will pause
    } else {
        audio1.pause();
    }
}


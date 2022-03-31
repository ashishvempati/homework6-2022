var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	console.log("The current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate *= 0.95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate /= 0.95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current location is " + video.currentTime)
	if (video.duration - video.currentTime > 15){
		video.currentTime += 15
	}
	else{
		console.log("Remaining length of video is less than 15 seconds. Replaying video")
		video.currentTime = 0
	}
	console.log("New location is " + video.currentTime)

});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		console.log("The value of mute is " + video.muted)
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else{
		video.muted = true;
		console.log("The value of mute is " + video.muted)
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("The current volume is " + video.volume)
	video.volume = this.value/100
	console.log("The current volume is " + video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});


document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("#player1").classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("#player1").classList.remove("oldSchool")
});
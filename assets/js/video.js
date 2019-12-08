var w = document.documentElement.clientWidth;

var video = document.getElementById("video");
var source1 = document.createElement("source");
var source2 = document.createElement("source");

if (w > 575.98) {
  source1.setAttribute("src", "/assets/videos/wideIntro.mp4");
  source2.setAttribute("src", "/assets/videos/wideIntro.webm");
} else {
  source1.setAttribute("src", "/assets/videos/narrowIntro.mp4");
  source2.setAttribute("src", "/assets/videos/narrowIntro.webm");
}

source1.setAttribute("type", "video/mp4");
source2.setAttribute("type", "video/webm");

video.appendChild(source1);
video.appendChild(source2);

video.load();

var content = document.getElementById("delay");
content.style.display = "none";

function sync () {
var video = document.querySelector('#video');
video.classList.add('anim-fade-out');
}

// wait to see if video is loaded
var b = setInterval(() => {
  if (video.readyState >= 3) {
    //This block of code is triggered when the video is loaded
    setTimeout(function() {
      $("#delay").fadeIn(500);
    }, 3600);
    setTimeout(function() {
      $('#video').fadeOut(500);
    }, 3500);
    
    //stop checking every half second
    clearInterval(b);
  }
}, 500);
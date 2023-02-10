// get buttons
const btn_on = document.getElementById('on');
const btn_off = document.getElementById('off');

// get led
const lights = document.getElementsByClassName('circle');

// add event listeners
btn_off.addEventListener('click', () => {
  var len = lights.length;
  for (var i = 0; i < len; i++) {
    lights[i].style.animation = "none";
    lights[i].style.background = "#563260";
  }
});

btn_on.addEventListener('click', () => {
  var len = lights.length;
  for (var i = 0; i < len; i++) {
    lights[i].removeAttribute("style");
    lights[i].style.animationPlayState = "running";
    lights[i].style.WebkitAnimationPlayState = "running";
  }
});
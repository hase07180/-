$(document).ready(function(){
  animateLogo();
});

function animateLogo() {
  var path = new Array();
  path[0] = $(".title h1 path:nth-child(1)");
  path[1] = $(".title h1 path:nth-child(2)");
  path[2] = $(".title h1 path:nth-child(3)");
  path[3] = $(".title h1 path:nth-child(4)");

  for(var i=0; i<path.length; i++) {
    var totalLength = path[i][0].getTotalLength();
    path[i].css("stroke-dasharray", totalLength);
    path[i].css("stroke-dashoffset", totalLength);
  }

  var delay = 2000;
  setTimeout(function(){
    animatePath(path[0], 2000);
  }, delay);
  delay += 2000;

  setTimeout(function(){
    animatePath(path[1], 3000);
  }, delay);
  delay += 3000;

  setTimeout(function(){
    animatePath(path[2], 4000);
  }, delay);
  delay += 4000;

  setTimeout(function(){
    animatePath(path[3], 5000);
  }, delay);
}

function animatePath(path, duration) {
  path.animate({
    "stroke-dashoffset": 0
  }, duration);
}

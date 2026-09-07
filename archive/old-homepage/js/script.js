$(document).ready(function() {
  var wWidth;
  var wHeight;
  var randomX = Math.random(wWidth) * 100 + "%";
  var randomY = Math.random(wHeight) * 100 + "%";
  $(".compass").css({ left: randomX, bottom: randomY });

  $(window).on("resize", function() {
    resize();
  });

  resize();

  function resize() {
    var wWidth = $(window).width();
    var wHeight = $(window).height();

    if (wHeight > wWidth) {
      $("#image, #overlay").css({
        height: wWidth,
        width: wWidth,
        top: wHeight * 0.5,
        marginTop: wWidth * -0.5,
        marginLeft: 0,
        left: 0
      });
    } else {
      $("#image, #overlay").css({
        height: wHeight,
        width: wHeight,
        left: wWidth * 0.5,
        marginLeft: wHeight * -0.5,
        top: 0,
        marginTop: 0
      });
    }
  }

  $(window).mousemove(function(event) {
    var msg = "Handler for .mousemove() called at ";
    msg += event.pageX + ", " + event.pageY;
    var xMover = 50 + ((event.pageX - wWidth / 2) / 500) * -1;
    var yMover = 50 + ((event.pageY - wHeight / 2) / 200) * -1 - 20;
    $("#intro").css({ backgroundPosition: xMover + "% ", top: yMover + "% " });
  });

  function deviceMotionHandler(eventData) {
    var info,
      xyz = "[X, Y, Z]";

    // Grab the acceleration from the results
    var acceleration = eventData.acceleration;
    info = xyz.replace("X", acceleration.x);
    info = info.replace("Y", acceleration.y);
    info = info.replace("Z", acceleration.z);
    // document.getElementById("here").innerHTML = info;

    // Grab the acceleration including gravity from the results
    acceleration = eventData.accelerationIncludingGravity;
    info = xyz.replace("X", acceleration.x);
    info = info.replace("Y", acceleration.y);
    info = info.replace("Z", acceleration.z);
    // document.getElementById("here").innerHTML = info;

    // Grab the rotation rate from the results
    var rotation = eventData.rotationRate;
    // info = xyz.replace("X", rotation.alpha);
    // info = info.replace("Y", rotation.beta);
    info = info.replace("Z", rotation.gamma);
    var roundInfo = Math.round(rotation.gamma);
    // document.getElementById("doTiltLR").innerHTML = roundInfo;

    // // Grab the refresh interval from the results
    info = eventData.interval;
    // document.getElementById("here").innerHTML = info;

    $("#intro").css({
      backgroundPosition: 50 + roundInfo / 2 + "% ",
      top: 30 + roundInfo / 2 + "% "
    });
  }

  if (window.DeviceMotionEvent) {
    window.addEventListener("devicemotion", deviceMotionHandler, false);
  } else {
  }
});

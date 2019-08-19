window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

document.getElementById("fname").addEventListener("keydown", colorChange1);

function colorChange1() {
 document.getElementById("fname").style.backgroundColor = "#D18C94";
}

document.getElementById("email").addEventListener("keydown", colorChange2);

function colorChange2() {
 document.getElementById("email").style.backgroundColor = "#D18C94";
}

document.getElementById("subject").addEventListener("keydown", colorChange3);

function colorChange3() {
 document.getElementById("subject").style.backgroundColor = "#D18C94";
}
window.onload=function start(){
    document.getElementById('whoissam').style.display = 'block';
    document.getElementById('intro1').style.display = 'none';
    document.getElementById('intro2').style.display = 'none';
}
/*
function intro() {
    var x = document.getElementById('whoissam');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

    var y = document.getElementById('intro1');
    if (y.style.display === 'none') {
        y.style.display = 'block';
        y.fadein
    } else {
        y.style.display = 'none';
    }
*/

function intro() {
   var x = document.getElementById('whoissam');
    var y = document.getElementById('intro1');
    var z = document.getElementById('intro2');

    if (x.style.display === 'block') {
        x.style.display = 'none';
        y.style.display = 'block';

    }
    else if (y.style.display === 'block') {
        y.style.display = 'none';
        z.style.display = 'block';
    }

  //switch (true) {
  //  case x.style.display ==:

    //  break;
  //  default:

//  }

}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 80);
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 60);
}



function rollover()
{

    whoissamroll.src = 'images/whoissam2.png';

}
function mouseaway()
{

    whoissamroll.src = 'images/whoissam1.png';

}

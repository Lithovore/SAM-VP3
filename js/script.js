window.onload=function start(){
    document.getElementById('whoissam').style.display = 'block';
    document.getElementById('intro1').style.display = 'none';
    document.getElementById('intro2').style.display = 'none';
    document.getElementById('intro3').style.display = 'none';
    document.getElementById('intro4').style.display = 'none';
    document.getElementById('intro5').style.display = 'none';
    document.getElementById('intro6').style.display = 'none';
    document.getElementById('intro7').style.display = 'none';
    document.getElementById('introFinal').style.display = 'none';

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

function skipIntro(){
  var slideOne = document.getElementById('whoissam');
  var slideTwo = document.getElementById('intro1');
  var slideThree = document.getElementById('intro2');
  var slideFour = document.getElementById('intro3');
  var slideFive = document.getElementById('intro4')
  var slideSix = document.getElementById('intro5')
  var slideSeven = document.getElementById('intro6')
  var slideEight = document.getElementById('intro7')
  var slideFinal = document.getElementById('introFinal')

  if (slideOne.style.display === 'block') {
      slideOne.style.display = 'none';
      slideFinal.style.display = 'block';
      document.getElementById("containerSqButtons").style.display = "block";

  }
  else if (slideTwo.style.display === 'block') {
      slideTwo.style.display = 'none';
      slideFinal.style.display = 'block';
      document.getElementById("containerSqButtons").style.display = "block";
  }
  else if(slideThree.style.display === 'block'){
      slideThree.style.display = 'none';
      slideFinal.style.display = 'block';
      document.getElementById("containerSqButtons").style.display = "block";
  }
  else if(slideFour.style.display === 'block'){
    slideFour.style.display = 'none';
    slideFinal.style.display = 'block';
    document.getElementById("containerSqButtons").style.display = "block";
  }
  else if(slideFive.style.display === 'block'){
    slideFive.style.display = 'none';
    slideFinal.style.display = 'block';
    document.getElementById("containerSqButtons").style.display = "block";
  }
  else if(slideSix.style.display === 'block'){
    slideSix.style.display = 'none';
    slideFinal.style.display = 'block';
    document.getElementById("containerSqButtons").style.display = "block";
  }
  else if(slideSeven.style.display === 'block'){
    slideSeven.style.display = 'none';
    slideFinal.style.display = 'block';
    document.getElementById("containerSqButtons").style.display = "block";
  }
  else if(slideEight.style.display === 'block'){
    slideEight.style.display = 'none';
    slideFinal.style.display = 'block';
    document.getElementById("containerSqButtons").style.display = "block";
  }
}

function intro() {
    var slideOne = document.getElementById('whoissam');
    var slideTwo = document.getElementById('intro1');
    var slideThree = document.getElementById('intro2');
    var slideFour = document.getElementById('intro3');
    var slideFive = document.getElementById('intro4')
    var slideSix = document.getElementById('intro5')
    var slideSeven = document.getElementById('intro6')
    var slideEight = document.getElementById('intro7')
    var slideFinal = document.getElementById('introFinal')

    if (slideOne.style.display === 'block') {
        slideOne.style.display = 'none';
        slideTwo.style.display = 'block';

    }
    else if (slideTwo.style.display === 'block') {
        slideTwo.style.display = 'none';
        slideThree.style.display = 'block';
    }
    else if(slideThree.style.display === 'block'){
        slideThree.style.display = 'none';
        slideFour.style.display = 'block';
    }
    else if(slideFour.style.display === 'block'){
      slideFour.style.display = 'none';
      slideFive.style.display = 'block';
    }
    else if(slideFive.style.display === 'block'){
      slideFive.style.display = 'none';
      slideSix.style.display = 'block';
    }
    else if(slideSix.style.display === 'block'){
      slideSix.style.display = 'none';
      slideSeven.style.display = 'block';
    }
    else if(slideSeven.style.display === 'block'){
      slideSeven.style.display = 'none';
      slideEight.style.display = 'block';
    }
    else if(slideEight.style.display === 'block'){
      slideEight.style.display = 'none';
      slideFinal.style.display = 'block';
      document.getElementById("containerSqButtons").style.display = "block";
    }

  //switch (true) {
  //  case x.style.display ==:

    //  break;
  //  default:

//  }

}

function rollover()
{

    whoissamroll.src = 'images/whoissam2.png';

}
function mouseaway()
{

    whoissamroll.src = 'images/whoissam1.png';

}

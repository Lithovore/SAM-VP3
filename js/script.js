window.onload=function(){
  document.getElementById('iamsam').style.display = 'none';
}

function whoissam() {
    var x = document.getElementById('iamsam');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

    var y = document.getElementById('whoissam');
    if (y.style.display === 'none') {
        y.style.display = 'block';
        y.fadein
    } else {
        y.style.display = 'none';
    }

}

function rollover()
{

    whoissamroll.src = 'images/whoissam2.png';

}
function mouseaway()
{

    whoissamroll.src = 'images/whoissam1.png';

}

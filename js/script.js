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

    if (x.style.display = 'block') {
        x.style.display = 'none';
        y.style.display = 'block';
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

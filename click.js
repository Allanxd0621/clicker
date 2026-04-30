let click = 0;

document.getElementById('click').onclick = function(){
    click++;
}// this is for the clicks

document.getElementById('show').onclick = function(){
    alert('The number of Clicks: ' + click);
}// this is to show the number of clicks made by the click++ 
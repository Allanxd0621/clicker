let click = 0;

document.getElementById('click').onclick = function(){
    click++;
}// this is for the clicks

document.getElementById('show').onclick = function(){
    alert('The number of Clicks: ' + click);
    if(click = 10){
        alert('you spank me 10 times daddy');
    }
}// this is to show the number of clicks made by the click++ 

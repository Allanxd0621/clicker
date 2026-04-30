let click = 0;

document.getElementById('click').onclick = function(){
    click++;
    if(click == 10){
        alert('you spanked me 10 times daddy');
    }
}// this is for the clicks

document.getElementById('show').onclick = function(){
    alert('The number of Clicks: ' + click);
    
}// this is to show the number of clicks made by the click++ 

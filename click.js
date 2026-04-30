let click = 0;

document.getElementById('click').onclick = function(){
    click++;
    if(click == 5){
        alert('faster daddy');
    }
    else if(click == 10){
        alert('damnn ughh..');
    }
    else if(click == 15){
        alert('ugh faster daddy..');
    }
    else if(click == 20){
        alert('im almost there..');
    }
    else if(click == 30){
        alert('ugh Im cominggg!!!');
    }
    else if(click == 40){
        alert('💦💦💦💦');
    }
}// this is for the clicks

document.getElementById('show').onclick = function(){
    alert('The number of Clicks: ' + click);
    
}// this is to show the number of clicks made by the click++ 

document.getElementById('reset').onclick = function(){
    alert('Clicks back to 0');
    click = 0 ;
}

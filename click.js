let click = 0; // put as a starting integer of the click 

document.getElementById('click').onclick = function(){
    click++; //click++ just means adding one per click or per interaction
    //if else per clicks and alert to what it says 67 67 67
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
//getElementById(). what function = function(){ inside is the value and what you want to do with the value }
document.getElementById('show').onclick = function(){
    alert('The number of Clicks: ' + click);
    
}// this is to show the number of clicks made by the click++ 

document.getElementById('reset').onclick = function(){
    alert('Clicks back to 0');
    click = 0 ; // if clicked the number of clicks replaced to 0 because one = is replacing and two '==' is equals.
}

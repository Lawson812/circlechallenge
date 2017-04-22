

var radius = Number(document.getElementById('circleRadius').value);

function makeCircle(){
       if(document.getElementById('issaCircle')){
        var existingCircle=document.getElementById('issaCircle');
        existingCircle.parentNode.removeChild(existingCircle);
    };
    
var radius = Number(document.getElementById('circleRadius').value);
var newCircle=document.createElement('div');
newCircle.className='myCircle';
newCircle.setAttribute('id', 'issaCircle');
newCircle.setAttribute('style', 'width:' + radius*2 +'px; height:'+ radius*2 +'px');
document.body.appendChild(newCircle);
var area = document.getElementById('area');
area.innerText=((radius * radius) *Math.PI).toFixed(2) + ' pixels';
    
var innerRadius = radius *.7;
var innerCircle=document.createElement('div');
innerCircle.className='innerCircle';
innerCircle.setAttribute('id', 'innerCircle');
innerCircle.setAttribute('style', 'width:' + innerRadius +'px; height:'+ innerRadius +'px');
newCircle.appendChild(innerCircle);
var area = document.getElementById('area');
area.innerText=((radius * radius) *Math.PI).toFixed(2) + ' pixels';
    
// var askQuestions= document.createElement('input');
//    askQuestions.setAttribute('type', 'text')
};




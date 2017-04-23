

var radius = Number(document.getElementById('circleRadius').value);
var firstSection=document.getElementById('oberon');
function makeCircle(){
       if(document.getElementById('issaCircle')){
        var existingCircle=document.getElementById('issaCircle');
        existingCircle.parentNode.removeChild(existingCircle);
    };
    
var radius = Number(document.getElementById('circleRadius').value);
var firstSection=document.getElementById('oberon');
var newCircle=document.createElement('div');
newCircle.className='myCircle';
newCircle.setAttribute('id', 'issaCircle');
newCircle.setAttribute('style', 'width:' + radius*2 +'px; height:'+ radius*2 +'px');
firstSection.appendChild(newCircle);
var area = document.getElementById('area');
area.innerText=((radius * radius) *Math.PI).toFixed(2) + ' pixels';
    
var innerRadius = radius *.7;
var innerCircle=document.createElement('div');
innerCircle.className='innerCircle';
innerCircle.setAttribute('id', 'innerCircle');
innerCircle.setAttribute('style', 'width:' + innerRadius +'px; height:'+ innerRadius +'px');
newCircle.appendChild(innerCircle);
    
if(radius <100){
    var wrongSize=document.createElement('p');
    wrongSize.innerText="Your response is too small, but here's your tiny 8-ball";
    firstSection.appendChild(wrongSize);
}    else if(radius >400){
    var wrongSize=document.createElement('p');
    wrongSize.innerText="Your response is too big, but here's your huge 8-ball"
    firstSection.appendChild(wrongSize)
} else{
var responses=["All signs point to no", "Ask again later", "Who knows?", "It is certain","You will learn soon","Maybe","Trust your heart"];
    var ranNum =Math.floor(Math.random()*responses.length);
 
    var innerTriangle = document.createElement('div');
    innerTriangle.className='innerTriangle';
    innerCircle.appendChild(innerTriangle);
    var triangleImg=document.createElement('img')
    triangleImg.src='triangle.png';
    triangleImg.className='triangleImg';
    innerTriangle.appendChild(triangleImg);
    var fortuneText = document.createElement('p');
    fortuneText.innerText=responses[ranNum];
    fortuneText.className='fortuneText';
    innerTriangle.appendChild(fortuneText)

}

};





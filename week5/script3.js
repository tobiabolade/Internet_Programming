function clickFunction(){
    var element1 = document.getElementById('circle');
    var positionLeft = element1.offsetLeft;
    element1.style.left = positionLeft - 10 + 'px';
    
}
function myKeyCode(event){
    console.log(event.keyCode);
}

function myLoadFunction(){
    var element1 = document.getElementById('circle');
    element1.addEventListener('keydown', myKeyCode);
    
    
}

document.addEventListener('DOMContentLoaded', myLoadFunction);

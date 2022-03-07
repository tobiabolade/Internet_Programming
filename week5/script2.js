function opaque(){
    var element1 = document.getElementById('circle');
    var circleOpacity = parseFloat(element1.style.opacity);
    element1.style.opacity = circleOpacity - 0.1;
}

function clickFunction(){
    var element1 = document.getElementById('circle');
    setInterval(opaque, 1000);
    
}

function myLoadFunction(){
    var element1 = document.getElementById('circle');
    element1.addEventListener('click', clickFunction);
    element1.style.opacity = 1;
    
}

document.addEventListener('DOMContentLoaded', myLoadFunction);


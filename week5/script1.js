function myChange(){
    var element = document.getElementById('head');
    element.firstChild.nodeValue = "New Header";
}
function alertFunction(){
    var element1 = document.getElementById('circle');
    element1.style.backgroundColor = 'blue';
    var circleOpacity = parseFloat(element1.style.opacity);
    element1.style.opacity = circleOpacity - 0.1;
  
}

function myLoadFunction(){
    var element1 = document.getElementById('circle');
    element1.addEventListener('click', alertFunction);
    element1.style.opacity = 0.5;
}

document.addEventListener('DOMContentLoaded', myLoadFunction);


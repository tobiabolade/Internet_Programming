function clickFunction(){
    var element = document.getElementById('TypeIn');
    var element1 = document.getElementById('Content');
    element1.firstChild.nodeValue = element.value;

}

function myLoadFunction(){
    var element = document.getElementById('View');
    element.addEventListener('click', clickFunction);

}

document.addEventListener('DOMContentLoaded', myLoadFunction);
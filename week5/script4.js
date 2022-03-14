function myKeyDown(event) {
    if (event.keyCode == 37){
        var element = document.getElementById('circle');
        var positionLeft = element.offsetLeft;
        element.style.left = parseInt(positionLeft) - 10 + 'px';
    }

    if (event.keyCode == 39) {
        var element = document.getElementById('circle');
        var positionLeft = element.offsetLeft;
        element.style.left = parseInt(positionLeft) + 10 + 'px';
    }
}

function myLoadEvent(){
    document.addEventListener('keydown', myKeyDown);
    var element = document.getElementById('circle');
    element.style.opacity = 1;
}

document.addEventListener('DOMContentLoaded', myLoadEvent);
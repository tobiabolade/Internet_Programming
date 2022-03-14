function moveUp(){
    var element = document.getElementById('circle');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - 1 + 'px';
}

function moveDown(){
    var element = document.getElementById('circle');
    var positionDown = element.offsetTop;
    element.style.top = positionDown + 1 + 'px';
}

function moveRight(){
    var element = document.getElementById('circle');
    var positionRight = element.offsetLeft;
    element.style.left = positionRight + 1 + 'px';
}

function moveLeft(){
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 1 + 'px';
}

function myKeyDown(event){
    if (event.keyCode == 37){
        setInterval(moveLeft, 1000);
    }

    if (event.keyCode == 38){
        setInterval(moveUp, 1000);
    }

    if (event.keyCode == 39){
        setInterval(moveRight, 1000);
    }

    if (event.keyCode == 40){
        setInterval(moveDown, 1000);
    }
}

function myLoadEvent(){
    document.addEventListener('keydown', myKeyDown);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);
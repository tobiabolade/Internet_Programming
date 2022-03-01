function clickFunction(){
    var element = document.getElementById('TypeIn');
    alert(element.value);
}

function myLoadFunction(){
    var element = document.getElementById('View');
    element.addEventListener('click', clickFunction);

}

document.addEventListener('DOMContentLoaded', myLoadFunction);
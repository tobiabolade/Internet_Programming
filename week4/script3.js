function contentChange(){
    var element = document.getElementById('Heading');
    element.firstChild.nodeValue = 'New Heading';

    var element1 = document.getElementById('Content');
    element1.firstChild.nodeValue= 'New Page Content';
}

function myLoadFunction(){
    var element = document.getElementById('Heading');
    element.addEventListener('mouseenter', contentChange);

}

document.addEventListener('DOMContentLoaded', myLoadFunction);
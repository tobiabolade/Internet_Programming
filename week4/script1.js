function contentChange(){
    var element = document.getElementById('Heading');
    var element1 = document.getElementById('Content');
    element.firstChild.nodeValue = 'New Heading';
    element1.firstChild.nodeValue= 'New Page Content';
}

document.addEventListener('DOMContentLoaded', contentChange);
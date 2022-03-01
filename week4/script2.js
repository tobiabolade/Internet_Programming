function contentChange(){
    var element = document.getElementById('Heading');
    element.firstChild.nodeValue = 'New Heading';

    
}
function paragraphChange(){
    var element1 = document.getElementById('Content');
    element1.firstChild.nodeValue= 'New Page Content';
}

function myLoadFunction(){
    var element = document.getElementById('Heading');
    element.addEventListener('click', contentChange);

    var element = document.getElementById('Content');
    element.addEventListener('click', paragraphChange);


}

document.addEventListener('DOMContentLoaded', myLoadFunction);
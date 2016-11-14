/*
* ¿íÕ­ÆÁÇÐ»»
* */
var smallscreen = false;
var domWidth = document.documentElement.clientWidth;
if ( domWidth<1200 ) {
    smallscreen = true;
    var bodyTag = document.getElementsByTagName("body")[0],
    bodyClassName = bodyTag.getAttribute("className") || bodyTag.getAttribute("class");
    bodyClassName = bodyClassName ? bodyClassName+" " : "";
    bodyTag.className = bodyClassName+"root1000";
}
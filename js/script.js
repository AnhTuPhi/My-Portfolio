var moon = document.getElementById("moon");
var star = document.getElementById("star");
var front = document.getElementById("front");
var behind = document.getElementById("behind");
var text = document.getElementById("text-animated");
var header = document.getElementById("header-wrapped");
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    star.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1 + 'px';
    behind.style.top = value * 0.05 + 'px';
    front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.25 + 'px';
    header.style.top = value * 0.5 + 'px';
});

var mouseCursor = document.querySelector('.cursor');
var menu = document.querySelectorAll('.menu-wrapped li');

window.addEventListener('mousemove', cursor);
function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

menu.forEach(link => {
    link.addEventListener('mouseleave', ()=>{
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    });
    link.addEventListener('mouseover', ()=>{
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    });
});
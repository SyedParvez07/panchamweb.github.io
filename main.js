
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('bar2');

if(bar){
    
    bar.addEventListener('click', () => {
        nav.style="right: 0px;";
    });
}
document.getElementById('hamburger-menu').onclick = function(){
    document.querySelector('.mobile-menu').classList.add('open')
}
document.getElementById('close-menu').onclick = function(){
    document.querySelector('.mobile-menu').classList.remove('open')
}
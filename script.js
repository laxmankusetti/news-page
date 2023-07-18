function myFunc1() {
    document.querySelector('.open-menu').style.display = 'block'
    document.getElementById('menu').classList.add('opened-menu');
    document.getElementById('menu').classList.remove('closed-menu')
}
function myFunc2() {
    document.getElementById('menu').classList.add('closed-menu');
    document.getElementById('menu').classList.remove('opened-menu')
}
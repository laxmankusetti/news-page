const mobileHamburgerMenu = document.getElementsByClassName('mobile-navbar')

mobileHamburgerMenu.addEventListener('mouseover', animateMenu)

function animateMenu() {
    mobileHamburgerMenu.style.display = 'block'
}
const nav = document.querySelector('.navbar__list')
const burgerBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')
  
const handleNav = () => {
    burgerBtn.classList.toggle('is-active')
    nav.classList.toggle('navbar--active')
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
    
}
handleCurrentYear()
burgerBtn.addEventListener('click', handleNav)
let burger = document.querySelector('.burger');
let sub_mobile = document.querySelector('.sub_mobile')

burger.addEventListener('click', () => {
    sub_mobile.classList.toggle("display_none")
})
window.addEventListener('resize', event => {
    if (window.innerWidth > 769) {
        sub_mobile.classList.add("display_none")
    }
})

const btn = document.getElementById('toggle-btn')
const nav_btn = document.querySelector('.nav-btn')
btn.addEventListener("click", () => {
    btn.classList.toggle('active')
    nav_btn.classList.toggle('active')
})
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav a").forEach(e => {
        if(window.location.href.includes(e.attributes.href.value)) {
            e.classList.add("nav__active")
        }
    })
})
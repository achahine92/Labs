const menu = document.querySelector(".menu")
const menuIcon = document.querySelector(".menu-icon")
menuIcon.addEventListener("click", () => {
    menu.style.display = menu.style.display === "none" ? "block" : "none"
})

const alphabetDiv = document.getElementById("alphabet")
const numbersDiv = document.getElementById("numbers")
const showAlphabet = document.getElementById("show-alphabet")
const showNumbers = document.getElementById("show-numbers")

showAlphabet.addEventListener("click", e => {
    e.preventDefault()
    alphabetDiv.style.display = "block"
    numbersDiv.style.display = "none"
    menu.style.display = "none"
})

showNumbers.addEventListener("click", e => {
    e.preventDefault()
    alphabetDiv.style.display = "none"
    numbersDiv.style.display = "block"
    menu.style.display = "none"
})
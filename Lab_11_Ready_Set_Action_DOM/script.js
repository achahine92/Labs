const main = () => {
    const growMe = document.getElementById("grow-me") // select id element called "grow-me"
    growMe.classList.add("big") // add class "big" to grow-me element
    const shrinkMe = document.getElementById("shrink-me") // select id element called "shrink-me"
    shrinkMe.classList.remove("big") // remove class "big" from shrink-me element
    const lis = document.querySelectorAll("li") // get all <li> elements
    for (const li of lis) { // for every <li> of all the <li>s
        console.log(li) // log each one
    }
    const link = document.querySelector(".link") // get the class element named "link"
    link.setAttribute("href", "https://www.example.com") // mnipulate the attribute to a new url in the link
    link.innerText = "somewhere" // change the text in the "link" class from "nowhere" no "somewhere"
    const hideMe = document.getElementById("hide-me") // get id element called "hide-me"
    hideMe.style.display = "none" // set its display in CSS to "none"
    const showMe = document.getElementById("show-me") // get id element called "show-me"
    showMe.style.display = "block" // set its display property to "block"
    const nameInput = document.getElementById("name") 
    const userName = nameInput.value
    const welcomeMessage = document.querySelector("h1")
    welcomeMessage.textContent = `Welcome ${userName}!`

}


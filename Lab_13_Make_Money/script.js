// get the form from HTML
const moneyForm = document.getElementById("money-form")
// get coin display div from HTML
const coinDisplay = document.getElementById("coin-display")

// add event listener so DOM knows what to do at submission
moneyForm.addEventListener("submit", e => {
    // prevent default submission behavior
    e.preventDefault()
    // at submission, get values for coin type and coin count from the form
    const coinType = document.getElementById("coin-type").value
    const coinCount = parseInt(document.getElementById("coin-count").value)

    // testing out the button, not getting any results
    /* 
    const makeMoneyButton = document.querySelector("button")
    makeMoneyButton.addEventListener("click", () => {
        console.log(coinType)
    }) 
    */

    // call functions below
    hideCoinsAtStart()
    displayCoins(coinType, coinCount)
})

// create function to hide coins at the start
const hideCoinsAtStart = () => {
    coinDisplay.style.display = "none"
}

// create function to display specified coins in their specified number
const displayCoins = (coinType, coinCount) => {
    coinDisplay.style.display = "inline-block"

    const coinElements = document.querySelectorAll(`#coin-display .${coinType}-display`)

    // loop to add the input number of coins to the page
    for (let i = 0; i < coinCount; i++) { // for every coin leading up to input coin count
        if (i < coinElements.length) { // as long as i < total coin count
            coinElements[i].style.display = "inline-block" // it will keep displaying coins
        }
        // create event to hide the coin when it's clicked
        coinElements[i].addEventListener("click", () => {
        coinElements[i].style.display = "none"
        })
    } 
}

// Notes for reviewer: I'm struggling with this and not sure what 
// I'm doing wrong. I tried to create a NodeList for all 4 coin types
// and iterate through them in the for loop.
// I asked the internet why I was getting an error and it suggested
// I use a Math.min method to ensure coinCount does not exceed the number 
// of coinElements in the NodeList - but this can't be right because
// the node list contains 4 elements, and I should still be able to 
// command the display of as many coins as I type in. Halp.
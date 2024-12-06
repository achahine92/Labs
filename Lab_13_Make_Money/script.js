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
    console.log(coinType) // test
    const coinCount = parseInt(document.getElementById("coin-count").value)
    console.log(coinCount) // test

    // call function to add coins upon submission
    addCoins(coinType, coinCount)
})

// create function to display specified coins in their specified number
const addCoins = (coinType, coinCount) => {
    // loop to add the input number of coins to the page
    for (let i = 0; i < coinCount; i++) { // for every coin leading up to input coin count
        const coin = document.createElement("div") // create coin div
        coin.classList.add(`${coinType}-display`) // add coin class to coinType element
        coinDisplay.appendChild(coin) // append coin child to coinDisplay parent
        coin.innerText = coinType // add text to the displayed coins
        coin.style.display = "inline-block" // add display style to coins
        coin.addEventListener("click", () => coin.remove()) // event listener to remove coins when clicked on
    } 
}
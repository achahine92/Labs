const moneyForm = document.getElementById("money-form")
const coinDisplay = document.getElementById("coin-display")

moneyForm.addEventListener("submit", e => {
    e.preventDefault()
    const coinType = document.getElementById("coin-type").value
    console.log(coinType) // confirm that form data is captured in this block of code
    const coinCount = parseInt(document.getElementById("coin-count").value)
    console.log(coinCount) // ditto

    addCoins(coinType, coinCount)
})

const addCoins = (coinType, coinCount) => {
    for (let i = 0; i < coinCount; i++) {
        const coin = document.createElement('div')
        coin.classList.add(`${coinType}-display`) // string interpolation to match CSS class selector
        coin.innerText = coinType
        coin.addEventListener('click', () => coin.remove()) // remove from DOM instead of `display: none`
        coinDisplay.appendChild(coin)
    }
}

const redditUrl = "https://www.reddit.com/r/"

// load all posts and reference the subreddit for "aww" as well
const loadPosts = async subreddit => {
    const response = await fetch(redditUrl + subreddit + "/.json") // fetch the base reddit url along with the subreddit search "aww" and /.json
    const data = await response.json()
    return data.data.children.map(post => post.data)
}
 // get posts specifically from the "aww" subreddit: loadPosts(subreddit) is now loadPosts("aww")

 /* const keywordSearch = document.getElementById("keyword-input")
    const searchBttn = document.getElementById("search-button")
    searchBttn.addEventListener("click", () => {
        if (subreddit === "aww") {
            getAwwPosts()
        } else if (subreddit === "") {
            loadPosts("")
        } else {
            console.log("Page not found")
        }
    })
*/
 const getAwwPosts = async () => loadPosts("aww")

console.log(getAwwPosts()) // call the function and print the data

// in similar logic, start by getting all posts and their speciofic data points of interest
const displayPosts = post => {
    const { author, title, thumbnail, url } = post // deconstruct your post array! remove all post.[element] code and replace with just element
    const postWrapper = document.createElement("div") // create div for postWrapper (will hold the post data)
    const screenName = document.createElement("div") // create div for screen name of poster
    screenName.id = "screenName" // assign an id to style in CSS
    const titleTag = document.createElement("div") // create div for title of post
    titleTag.id = "titleTag" // assign an id to style in CSS
    const photo = document.createElement("img") // create element for img in post
    const workingLink = document.createElement("a") // create div for working link in post
    
    screenName.innerText = author // content for screenName
    titleTag.innerText = title // content for title
    photo.src = thumbnail // content for photo
    workingLink.innerText = url // content for workingLink
    
    postWrapper.appendChild(screenName) // append to parent element so they will belong to postWrapper
    postWrapper.appendChild(titleTag) // append to parent element so they will belong to postWrapper
    postWrapper.appendChild(photo) // append to parent element so they will belong to postWrapper
    postWrapper.appendChild(workingLink) // append to parent element so they will belong to postWrapper
    
    postWrapper.classList.add("wrapper") // create class for postWrapper so each post can be styled
    document.body.appendChild(postWrapper) // append to body
}

// now get and display all aww posts using the getAwwPosts function
const displayAwwPosts = async () => { // create an async function to display the specified data within the database
    const awwPosts = await getAwwPosts() // create an awwPosts array to reference the data located in getAwwPosts() and extracted in displayPosts()
    for (const post of awwPosts.slice(0, 10)) displayPosts(post) // display each post in awwPosts, and create an array within the array to only post the first 10
}

// call method
displayAwwPosts()

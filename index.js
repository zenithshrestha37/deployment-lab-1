console.log ("it worked")

const devMountainBtn = document.querySelector(".dev-mountain-btn")

devMountainBtn.addEventListener("click", () => {
    console.log ("Dev mountain button clicked")
    axios.get("http://localhost:3000/devMountain").then(res => {
        console.log("sent a request to API")
    }).catch(err=> {
        console.log({error: err})
    })
})
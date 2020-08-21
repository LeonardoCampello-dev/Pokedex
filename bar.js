const container = document.querySelector(".container")
let bar = document.createElement("div")

function createBarStyle(item) {
    item.style.height = "6px"
    item.style.width = "0"
    item.style.backgroundColor = "#04D361"
    item.style.position = "fixed"
    item.style.top = "0"
    item.style.left = "0"
    item.style.zIndex = "9999"
    item.style.transition = "0.2s"
}

function updateBar() {
    const containerHeight = container.offsetHeight
    const pagePosition = window.pageYOffset

    const updatedBar = (pagePosition * 100) / containerHeight

    bar.style.width = updatedBar + "%"
}

document.body.append(bar)

createBarStyle(bar)

window.addEventListener("load", () => {
    document.addEventListener("scroll", updateBar)
})

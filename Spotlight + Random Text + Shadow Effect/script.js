const container = document.querySelector(".container")

container.addEventListener("mousemove", dets => {
    container.style.setProperty("--y", dets.offsetY + "px")
    document.body.style.setProperty("--x", dets.clientX + "px")

})

container.addEventListener("click", dets => {
    document.querySelector("video").muted = false
})

const para = document.querySelector(".second p")
const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerHTML
let iteration = 0

function randomText(){
    let string = text.split("").map((char, index) => {
            if(index<iteration) return char;
            return abc[Math.floor(Math.random() * 53)]
        }).join("")
        para.innerHTML = string
    console.log(iteration);
    
    iteration += 1.5

}

let hovered = false
para.addEventListener("mouseenter", ()=>{
    if(hovered) return;

    hovered = true
    const interval = setInterval(randomText, 60)

    setTimeout(() => {
        clearInterval(interval)
    }, 2000);
})


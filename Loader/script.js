let inner = document.querySelector(".downloadBarInner")
let percent = document.querySelector(".bottom h4>div")
let leftTime = document.createElement("span")
let btn = document.querySelector(".btn")

btn.addEventListener("click", function(){
    btn.style.opacity = 0.6
    btn.style.pointerEvents = "none"
    let samay = 5+Math.floor(Math.random()*6)
    
    x = 0
    let a = setInterval(() => {
        x++
        percent.textContent = `${x}%`
        inner.style.width = `${x}%`
    }, samay*10);

    let copySamay = samay
    leftTime.textContent =`${copySamay} seconds left...`

    let leftSeconds = setInterval(() => {
        copySamay--
        leftTime.textContent =`${copySamay} seconds left...`
    }, 1000);

    document.querySelector(".bottom h4").appendChild(leftTime)
    setTimeout(() => {
        clearInterval(a) 
        clearInterval(leftSeconds)
        btn.textContent = "Downloaded"
    }, samay*1000);
})


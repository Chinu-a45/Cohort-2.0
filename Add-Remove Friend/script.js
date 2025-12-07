let button = document.querySelectorAll(".card button")


button.forEach(elem=>{
    elem.addEventListener("click", dets=>{
        if(elem.innerHTML === "Add Friend"){
            elem.innerHTML = "Remove Friend"
            elem.style.backgroundColor = "red"
        }
        else{
            elem.innerHTML = "Add Friend"
            elem.style.backgroundColor = "royalblue"
        }
    })
})
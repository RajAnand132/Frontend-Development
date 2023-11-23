const panels = document.querySelectorAll(".panel")

//op0
panels.forEach(panel => {
    //op1
    panel.addEventListener("click",()=>{
        //op2
        removeActiveClasses()

        panel.classList.add("active")
        //op3
    })
})

//op4

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove("active")
    })
}
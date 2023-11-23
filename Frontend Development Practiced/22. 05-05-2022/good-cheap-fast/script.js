const toggles = document.querySelectorAll(".toggle")

const good = document.querySelector("#good")
const cheap = document.querySelector("#cheap")
const fast = document.querySelector("#fast")

toggles.forEach(toggle=>{
    toggle.addEventListener("change",(event)=>{

        if(good.checked && cheap.checked && fast.checked){
            if(good === event.target){
                fast.checked=false
            }
            else if(cheap===event.target){
                good.checked=false
            }
            else if(fast===event.target){
                cheap.checked = false
            }
        }
    })
})
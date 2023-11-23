const buttons = document.querySelectorAll(".btn")


const stopAllSounds = () => {
    buttons.forEach(btn=>{
        const sound = document.getElementById(btn.innerText)
        sound.pause()
        sound.currentTime = 0
    })
}

buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        stopAllSounds()
        const id = btn.innerText
        document.getElementById(id).play()
    })
})

document.querySelector(".stop").addEventListener("click",()=>{
    stopAllSounds()
})

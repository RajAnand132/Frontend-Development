const sounds = ["applause","boo","gasp","tada","victory","wrong"]

const stopAllSounds = () => {
    sounds.forEach(soundName=>{
        const sound = document.getElementById(soundName)
        sound.pause()
        sound.currentTime = 0
    })
}


sounds.forEach((sound)=>{
    const btn = document.createElement("button")
    btn.classList.add("btn")
    btn.innerText=sound

    btn.addEventListener("click",()=>{
        stopAllSounds()
        document.getElementById(sound).play()
    })
    const buttonContainer = document.getElementById("buttons")
    buttonContainer.append(btn)
})
// buttons.forEach(btn=>{
//     btn.addEventListener("click",()=>{
//         stopAllSounds()
//         const id = btn.innerText
//         document.getElementById(id).play()
//     })
// })

// document.querySelector(".stop").addEventListener("click",()=>{
//     stopAllSounds()
// })

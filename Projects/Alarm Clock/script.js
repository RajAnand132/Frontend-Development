const addAlarmBtn = document.getElementById("submit")
const alarmDay = document.getElementById("day")
const alarmTime = document.getElementById("time")
const alarms = document.getElementById("alarms")

class Clock{
    constructor(){
        this.alarms = []
    }

    getAlarms(){
        return this.alarms;
    }

    setAlarm(time){
        const alarmInstance = {
            id: uniqueID(),
            time: time,
            snoozeRemaining: 3
        }

        this.alarmInstance.push(alarmInstance)
        refreshAlarmsInUI()
    }

    deleteAlarm(id){

    }

    snoozeAlarm(id,cancel=false){

    }

    playAlarm(id){
        console.log(`Alarm with id ${id} is playing`)
    }
}

const clock = new Clock();

addAlarmBtn.addEventListener("click",()=>{
    const hh = parseInt(alarmTime.value.split(":")[0])
    const min = parseInt(alarmTime.value.split(":")[1])
    const day = parseInt(alarmDay.value) || 0
    console.log(hh,min,day)

    //We need to now figure out, when is this alarm going to ring next

    const currYear = new Date().getFullYear()
    const currMonth = new Date().getMonth()
    const currDate = new Date().getDate()
    const currDay = new Date().getDay()
    const currHours = new Date().getHours()
    const currMins = new Date().getMinutes()

    let date = currDate - currDay + day;
    let dateTimeForAlarm = new Date(currYear,currMonth,date,hh,min,0,0)
    if(date<currDate || (date===currDate && (hh<currHours || (hh===currHours && min<=currMins)))){
        // date=date+7
        dateTimeForAlarm.setDate(dateTimeForAlarm.getDate()+7)
    }
    console.log(dateTimeForAlarm)
    clock.setAlarm(dateTimeForAlarm)
    // addAlarmToUI(dateTimeForAlarm)
})

const addAlarmToUI = (time,id) => {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    const dayIndex = new Date(time).getDay()
    const timeHH = new Date(time).getHours()
    const timeMin = new Date(time).getMinutes()

    const dayName = days[dayIndex]

    const alarmEl = document.createElement("div")
    alarmEl.classList.add("alarmEl")
    alarmEl.innerHTML = `<h3 id=${id}>
        ${dayName} ${timeHH.toString().padStart(2,"0")}:${timeMin.toString().padStart(2,"0")}
    </h3>
    <p>
        Next Alarm on ${new Date(time)}
    </p>
    `
    alarms.appendChild(alarmEl)

}
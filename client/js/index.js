fetch("https://cors-anywhere.herokuapp.com/https://duome.eu/pfannkuchen31").then(data => data.text()).then(data => {
    let daysStreak = (data.split(`<div><span class="icon streak"></span> <span class=""><span aria-label="`)[1].split(`">`)[0])

    let XP = (data.split(`<div>`)[1].split("</div>")[0])
    document.getElementById("DuolingoStats").innerHTML = `${daysStreak} --- ${XP} Total`
})

let queryString = window.location.search;
queryString = queryString.replace("?u=", "")
ShowThing(0, 10)
var stupidNumber = 0
function ShowThing(from, to) {
    fetch(`http://localhost:3000/api/get-user/${queryString}`).then(val => val.json()).then(val => {
        console.log(val.following)
        for(let i=0; i < to - from; i++) {
            fetch(`http://localhost:3000/api/get-user/${val.following[from + i]}`).then(user => user.json()).then(user => {
                let profilePicture = user.profilePicture
                for(i=0; i < profilePicture.length; i++) {
                    profilePicture = profilePicture.replace("|", "/")
                }
                document.getElementById("following").innerHTML = document.getElementById("following").innerHTML + `<div class="follow"><button onclick="location.href = 'user.html?u=${user.unique}'" class="follow-button-user"><img src="${profilePicture}" class="follow-profilePicture" widht="100" height="100"><h2 class="follow-username">${user.username}</h2><h3 class="follow-unique">@${user.unique}</h3></button></div>`
                stupidNumber += 1
            })
        }
    })
}

function loadMore() {
    ShowThing(stupidNumber, stupidNumber + 20)
}
var queryString = window.location.search;
queryString = queryString.replace("?u=", "")
var unique = getCookie("unique")
var token = getCookie("token")
var stupidNumber = 0
var postsToShow = []
var daI = 0
var notDaI = 0

fetch(`https://gougoule.ch/api/get-user/${unique}`).then(val => val.json()).then(async (user) => {
    console.log(user.following)
    console.log(user.following.length)
    while(notDaI<user.following.length) {
        await fetch(`https://gougoule.ch/api/get-user/${user.following[notDaI]}`).then(val => val.json()).then(val => {
            postsToShow = postsToShow.concat(val.messages)   
        })
        notDaI++
 
    }
    postsToShow = postsToShow.sort( function( a , b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    console.log(postsToShow)
    postsToShow = postsToShow.reverse()
    showPosts(postsToShow, 10)
    
})

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        showPosts(postsToShow, stupidNumber + 10)
        console.log("scroll")
    }
};



function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function bigSearch() {
    let searchQuery = document.getElementById("bigSearch").value
    document.getElementById("bigSearch").value = ""
    location.href = `search.html?q=${searchQuery}`
}

async function showPosts(messages, to) {
    console.log("function")
    console.log(messages)
    while(daI < to) {
        console.log(messages)
        let message = messages[daI]
        await fetch(`https://gougoule.ch/api/get-message/${message}`).then(val => val.json()).then( async (val) => {
            let likeOrNot
            console.log(val.likes.includes(unique))
            if(val.likes.includes(unique)) {
                likeOrNot = "unlike"
            }
            else {
                likeOrNot = "like"
            }

            if(val.content) {
                await fetch(`https://gougoule.ch/api/get-user/${val.author}`).then(author => author.json()).then(author => {
                    for(i=0; i < val.content.length; i++) {
                        val.content = val.content.replace("|", "/")
                    }
                    for(i=0; i < author.profilePicture.length; i++) {
                        author.profilePicture = author.profilePicture.replace("|", "/")
                    }
                    document.getElementById("posts").innerHTML = document.getElementById("posts").innerHTML + `<div class="post"><button onclick='location.href="user.html?u=${author.unique}"' class="post-button-account"><img src="${author.profilePicture}" alt="" class="profilePicture" id="profilePicture" widht="100" height="100"><h2 class="post-username">${author.username}</h2><h3 class="post-unique">@${val.author}</h3></button><h2 class="post-content">${val.content}</h2><div class="buttons"><button id="like${message}" onclick="like('${message}')" class="button-like">${likeOrNot}  ${val.likes.length}</button><button onclick="location.href ='message.html?m=${message}'" class="button-comments">commentaires</button></div></div>`
                    stupidNumber = stupidNumber + 1
                    daI++
                })
            }
        })
    }
    
}

async function like(message) {
    console.log("trying")
    console.log(message)
    let token = getCookie("token")
    let unique = getCookie("unique")
    if(unique == null) {
        window.alert("erreur, vous devez être connecté pour faire ceci")
        location.href = "login.html"
    }
    else {
        await fetch(`https://gougoule.ch/api/like-message/${unique}/${token}/${message}`).then(val => val.json()).then(val => {
            console.log("liked or not")
            console.log(val)
            if(val.response.includes("unliked")) {
                console.log("unliked")
                document.getElementById("like"+message).innerHTML = document.getElementById("like"+message).innerHTML.replace("unlike", "like")
            }
            else {
                console.log("liked")
                document.getElementById("like"+message).innerHTML = document.getElementById("like"+message).innerHTML.replace("like", "unlike")
            }
        })
    }   
}


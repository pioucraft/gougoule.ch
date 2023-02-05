function okcookies() {
    document.cookie = "cookies = ok; SameSite=None; Secure=True;";
    document.getElementById("cookiePopup").classList.add("hide");
    document.getElementById("cookiePopup").classList.remove("show");
}

function checkcookies() {
    cookies = document.cookie.split(";");
    if(cookies[0] === "cookies=ok") {
        console.log(document.getElementById("cookiePopup"))
        document.getElementById("cookiePopup").classList.add("hide");
        document.getElementById("cookiePopup").classList.remove("show");
    }
}

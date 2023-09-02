var theString = ""
var data = {"commands": [{"name": "help", "response": "Try to do 'ls', you can do 'cd [directory]' too, you can even just do 'cd'. Ho, I almost forgot, you can 'cat [file]'"}, {"name": "Hi!", "response": "Hey, you found the Secret, that means that you're amazing, send 'hello, I found the Secret.' to itsanemail@gougoule.ch (with capital letters)"}], "files": [{"type": "file", "name": "intro.txt", "parentFolder": "/", "content": ["Hello ! Here is a website where you can find stupid things I made, new things will appear later !", "Try do write 'help', and press enter for a surprize."]},{"type": "folder", "name": "projects", "content": "/projects", "parentFolder": "/"}, {"name": "experiments.gougoule", "type": "file", "parentFolder": "/projects", "content": ["All my experiments : ", "Lemonade Maker 3000 - This is yet another Cookie Clicker clone, but it sucks more and you replace the cookies with lemonade. You can access it <a href='experiments/lemonadeMaker/index.html'>here</a>.", "Frenchscript - This is basically a clone of Javascript, but you're using the fr*nch language. You shouldn't try it, but if you really want, click <a href='experiments/FrenchScript/index.html'>here</a>", "Gougoule Aero - This is a website to sell air like you would on Facebook Marketplace. You can access it <a href='experiments/sell-air/index.html'>here</a>."]}, {"type": "file", "name": "terminalwebsite.gougoule", "parentFolder": "/projects", "content": ["Terminal webite : ", "This is basically a way to easily make your own terminal-like website. I made gougoule.ch using this tool.", "You can access the git repository <a href='https://github.com/pioucraft/terminal-website'>here</a>. If you want to make your own terminal-like website using this tool, you can read the README.md"]}, {"type": "file", "name": "socialMedias.txt", "parentFolder": "/", "content": ["Here are my social media accounts (and my email too) : ", "Email : <a href='mailto:itsanemailadress@gougoule.ch'>itsanemailadress@gougoule.ch</a>", '<a rel="me" href="https://mastodon.gougoule.ch/@pfannkuchen">Mastodon</a>', '<a rel="me" href="https://github.com/pioucraft">Github</a>']}]}
var currentPath = "/"

document.getElementById("input").innerHTML = currentPath + " input : "


document.onkeydown = function (e) {
    console.log('key down');
    console.log(e.key);
    if(e.key == "Enter") {
        console.log("enter")
        execute(theString)
        console.log(theString)
        theString = ""
        document.getElementById("input").setAttribute("id", "")
        document.getElementById("window-content").innerHTML += `<li id="input">${currentPath} input : </li>`
    }
    else if(e.key == "Backspace") {
        console.log("back")
        document.getElementById("input").innerHTML = currentPath + " input : " + theString.slice(0, -1)
        theString = theString.slice(0, -1)
    }
    else if(e.key == "CapsLock") {
        console.log("caps")
    }
    else if(e.key == "Shift") {
        console.log("shift")
    }
    else {
        theString += e.key
        document.getElementById("input").innerHTML += e.key
    }
};

function execute(command) {
    if(command == "ls") {
        for(let i=0; i<data.files.length; i++) {
            console.log(currentPath)
            console.log(data.files[i].parentFolder)
            console.log(data.files.length)
            if(data.files[i].parentFolder == currentPath) {
                document.getElementById("window-content").innerHTML += `<li>${data.files[i].name}</li>`
            }
        }
    }
    else if(command.startsWith("cd")) {
        for(let i=0; i<data.files.length;i++) {
            console.log("\n")
            console.log(data.files[i])
            console.log(command.split(" ")[1])
            if(data.files[i].name == command.split(" ")[1] && data.files[i].parentFolder == currentPath) {
                console.log("hi")
                if(data.files[i].type == "file") {
                    document.getElementById("window-content").innerHTML += `<li>Error, can't cd into a file, it must be a directory.</li>`
                    return 0;
                }
                currentPath = data.files[i].content
                return 0;
            }
        }
        if(command == "cd") {
            currentPath = "/"
            return 0;
        }
        document.getElementById("window-content").innerHTML += `<li>Error, the folder does not exist.</li>`
    }
    else if(command.startsWith("cat")) {
        for(let i=0;i<data.files.length;i++) {
            if(data.files[i].name == command.split(" ")[1] && data.files[i].parentFolder == currentPath) {
                    console.log("hi")
                    if(data.files[i].type == "folder") {
                        document.getElementById("window-content").innerHTML += `<li>Error, can't read the content of a folder, it must be a file.</li>`
                        return 0;
                    }
                    for(let j=0; j<data.files[i].content.length; j++) {
                        document.getElementById("window-content").innerHTML += `<li>${data.files[i].content[j]}</li>`
                    } 
                    return 0;
            }
        }
    }
    else {
        for(let i=0; i<data.commands.length; i++) {
            if(command == data.commands[i].name) {
                document.getElementById("window-content").innerHTML += `<li>${data.commands[i].response}</li>` 
                return 0;
            }
        }
        document.getElementById("window-content").innerHTML += `<li>Error, the command doesn't exist.</li>` 
    }
    
}

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('src/index.html')
}

app.whenReady().then(() => {
    createWindow()
})


       

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
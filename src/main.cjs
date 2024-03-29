const { app, BrowserWindow } = require('electron')
const path = require('path')
require('electron-reload')(__dirname)

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            //preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }
    })

    win.loadFile('ui/index.html')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
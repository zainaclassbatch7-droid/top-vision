const { app, BrowserWindow } = require('electron')

const ADMIN_URL =
  process.env.ADMIN_URL ||
  'https://your-render-domain.onrender.com/admin?autoplay=1&username=admin&password=admin123'

function createWindow() {
  const window = new BrowserWindow({
    width: 1440,
    height: 960,
    autoHideMenuBar: true,
    backgroundColor: '#050505',
    webPreferences: {
      autoplayPolicy: 'no-user-gesture-required',
    },
  })

  window.loadURL(ADMIN_URL)
}

app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required')
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

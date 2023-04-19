// Modules to control application life and create native browser window
const { app, BrowserWindow, nativeTheme, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const Store = require('electron-store');

const schema = {
  connection: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        url: {
          type: 'string'
        },
        port: {
          type: 'number'
        }
      }
    }
  }
}

const store = new Store({ schema });

store.set({ connection: [{ url: 'localhost', port: 6379 }] })
const a = store.get('connection')
console.log(a, 'aaaa')
const c = [...(a || []), { url: 'localhost1', port: 1234 }]
store.set('connection', c)
const b = store.get('connection')
console.log(b, 'bbbb')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // and load the index.html of the app.
  // mainWindow.loadFile('../dist/index.html');

  mainWindow.loadURL('http://localhost:3000');

  // mainWindow.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, '../dist/index.html'),
  //     protocol: 'file:',
  //     slashes: true
  //   })
  // );

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  nativeTheme.themeSource = 'dark';
};

ipcMain.on('loadStorage', (event, _arg) => {
  event.returnValue = store.get(_arg)
})

ipcMain.on('setStorage', (event, _arg) => {
  store.set('config', _arg)
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

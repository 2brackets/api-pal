import { app, BrowserWindow, ipcMain} from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: any;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: any;


if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 800,
    width: 1200,
    minHeight: 800,
    minWidth: 1200,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();

  ipcMain.on('close', () => {
    mainWindow.close()
  });

  ipcMain.on('minimize', () => {
      mainWindow.minimize();
  });

  ipcMain.on('maximize', (event) => {
    if(mainWindow.isMaximized()){
      mainWindow.restore()
      event.returnValue = 'Restored'
    } else {
      mainWindow.maximize();
      event.returnValue = 'Maximized'
    }
  });
  
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
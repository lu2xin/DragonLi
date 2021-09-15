import { app, BrowserWindow, screen, ipcMain, MessageChannelMain, BrowserView } from 'electron';
import { join } from 'path';
import { URL } from 'url';

const isSingleInstance = app.requestSingleInstanceLock();

if (!isSingleInstance) {
  app.quit();
  process.exit(0);
}

app.disableHardwareAcceleration();

// Install "Vue.js devtools"
if (import.meta.env.MODE === 'development') {
  app.whenReady()
    .then(() => import('electron-devtools-installer'))
    .then(({ default: installExtension, VUEJS3_DEVTOOLS }) => installExtension(VUEJS3_DEVTOOLS, {
      loadExtensionOptions: {
        allowFileAccess: true,
      },
    }))
    .catch(e => console.error('Failed install extension:', e));
}

let mainWindow: BrowserWindow | null = null;

const createWindow = async () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const x = Math.floor((width - 800) / 2)
  const y = Math.floor(height / 4)
  mainWindow = new BrowserWindow({
    show: false, // Use 'ready-to-show' event to show window
    frame: false,
    resizable: false,
    width: 800,
    height: 52,
    x: x,
    y: y,
    webPreferences: {
      // preload: join(__dirname, '../preload/index.cjs'),
    },
  });

  /**
   * If you install `show: true` then it can cause issues when trying to close the window.
   * Use `show: false` and listener events `ready-to-show` to fix these issues.
   *
   * @see https://github.com/electron/electron/issues/25012
   */
  mainWindow.on('ready-to-show', () => {
    mainWindow?.show();

    if (import.meta.env.MODE === 'development') {
      mainWindow?.webContents.openDevTools();
    } else {
      mainWindow?.webContents.openDevTools();
    }
  });

  /**
   * URL for main window.
   * Vite dev server for development.
   * `file://../renderer/index.html` for production and test
   */
  const pageUrl = import.meta.env.MODE === 'development' && import.meta.env.VITE_DEV_SERVER_URL !== undefined
    ? import.meta.env.VITE_DEV_SERVER_URL
    : new URL('renderer/index.html', 'file://' + __dirname).toString();

  await mainWindow.loadURL(pageUrl);
};

ipcMain.on('preload-success', (event, args) => {
  event.returnValue = 'preload.js'
})



const loaderAllApplication = async () => {
  console.log('获取所有app信息')
}

const loaderThirdPlugin = async () => {
  console.log('通知插件进程，加载第三方plugin')
  // let icon = await app.getFileIcon('/System/Library/PreferencePanes/Keyboard.prefPane')
  // console.log(icon.toDataURL());
}

app.on('second-instance', () => {
  // Someone tried to run a second instance, we should focus our window.
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.whenReady()
  .then(createWindow)
  .then(loaderAllApplication)
  .then(loaderThirdPlugin)
  .catch((e) => console.error('Failed create window:', e));

// Auto-updates
// if (import.meta.env.PROD) {
//   app.whenReady()
//     .then(() => import('electron-updater'))
//     .then(({ autoUpdater }) => autoUpdater.checkForUpdatesAndNotify())
//     .catch((e) => console.error('Failed check updates:', e));
// }


import getApps from './shortcut'
import { SearchEngine } from './engine'

import { commonConst } from './common/utils'

import './common/config';
import Listener from './listener';

import { app, BrowserWindow, globalShortcut } from 'electron'

export function beforeReady() {
    // 系统托盘
    if (commonConst.macOS()) {
        if (commonConst.production() && !app.isInApplicationsFolder()) {
            app.moveToApplicationsFolder()
        } else {
            app.dock.hide()
        }
    } else {
        app.disableHardwareAcceleration()
    }
}

export async function runBackground() {
    const apps = await getApps()

    const items = apps.map(fe => ({
        name: fe.name,
        description: fe.description,
        icon: fe.icon,
        id: fe.name
    }))
    SearchEngine.registerItems(items, 'app-loader')
}

export async function afterReady(mainWindow: BrowserWindow) {
    const listener = new Listener();

    // 注册快捷键
    listener.registerShortCut(mainWindow);
    listener.init(mainWindow);
    mainWindow.once("ready-to-show", () => {
        // 非隐藏式启动需要显示主窗口
        if (!app.getLoginItemSettings().wasOpenedAsHidden) {
            mainWindow.show();
        }
    });

    // 打包后，失焦隐藏
    mainWindow.on('blur', () => {
        app.isPackaged && mainWindow.hide();
    });
}
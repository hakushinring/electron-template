import { ipcMain } from 'electron'

/**
 * 注册与时间相关的IPC处理程序
 */
export function registerTimeHandlers(): void {
  // 获取系统时间的IPC处理程序
  ipcMain.handle('get-system-time', () => {
    return new Date().toString()
  })
}

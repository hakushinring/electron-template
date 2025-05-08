import { registerTimeHandlers } from './timeHandlers'

/**
 * 注册所有IPC处理程序
 */
export function registerIpcHandlers(): void {
  registerTimeHandlers()

  // 未来可以在这里添加更多的处理程序注册
  // registerOtherHandlers()
}

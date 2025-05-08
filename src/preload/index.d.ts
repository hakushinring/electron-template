import { ElectronAPI } from '@electron-toolkit/preload'

// 定义API接口，包含获取系统时间的方法
interface API {
  getSystemTime(): Promise<string>
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: API
  }
}

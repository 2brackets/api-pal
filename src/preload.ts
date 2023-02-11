import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld(
  'api',
  {
    windowAction: (action: string) => ipcRenderer.send(action)
  }
)


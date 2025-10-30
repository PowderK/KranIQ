// Preload-Skript: sichere Schnittstelle zwischen Renderer und Node
const { contextBridge } = require('electron')

// Exponiere eine minimale API ins Renderer-Window (erweiterbar)
contextBridge.exposeInMainWorld('electronAPI', {
  // z.B. eine Methode, die in Zukunft native Funktionen aufruft
})

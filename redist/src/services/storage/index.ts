const { ipcRenderer } = window.require('electron');

const DATABASE_CONFIG = 'connection'

export const getConfig = () => ipcRenderer.sendSync('loadStorage', DATABASE_CONFIG)
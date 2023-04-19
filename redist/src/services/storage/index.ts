const { ipcRenderer } = window.require('electron');

const DATABASE_CONFIG = 'connection'

interface Connection {
    name: string;
    url: string;
    port: string;
}

export const getConfig = () => ipcRenderer.sendSync('loadStorage', DATABASE_CONFIG)
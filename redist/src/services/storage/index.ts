const { ipcRenderer } = window.require('electron');

const DATABASE_CONFIG = 'connection'

const LOAD_STORAGE_METHOD = 'loadStorage'

const SET_CONNECTION_STORAGE_METHOD = 'setStorage'

interface ConnectionParameters {
    name: string;
    url: string;
    port: number;
}

interface ConnectionConfig {
    configName: string
    parameters: ConnectionParameters
}

export const getConfig = () =>
    ipcRenderer.sendSync(LOAD_STORAGE_METHOD, DATABASE_CONFIG)

export const setConnection = (parameters: ConnectionParameters) =>
    ipcRenderer.send(SET_CONNECTION_STORAGE_METHOD, {
        configName: DATABASE_CONFIG,
        parameters
    })

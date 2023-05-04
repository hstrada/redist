const { ipcRenderer } = window.require('electron');

const DATABASE_CONFIG = 'connection'

const LOAD_STORAGE_METHOD = 'loadStorage'

const SET_CONNECTION_STORAGE_METHOD = 'setStorage'

export const getConfig = (): Storage[] =>
    ipcRenderer.sendSync(LOAD_STORAGE_METHOD, DATABASE_CONFIG)

export const setConnection = (parameters: Storage) =>
    ipcRenderer.send(SET_CONNECTION_STORAGE_METHOD, {
        configName: DATABASE_CONFIG,
        parameters
    })

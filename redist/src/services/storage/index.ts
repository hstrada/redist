import { Connection } from "../../context/models/Storage";

const { ipcRenderer } = window.require('electron');

const DATABASE_CONFIG = 'connection'

const LOAD_STORAGE_METHOD = 'loadStorage'

const SET_CONNECTION_STORAGE_METHOD = 'setStorage'

const REMOVE_CONNECTION_STORAGE_METHOD = 'removeFromStorage'

export const getConfig = (): Connection[] =>
    ipcRenderer.sendSync(LOAD_STORAGE_METHOD, DATABASE_CONFIG)

export const persistConnection = (parameters: Connection) =>
    ipcRenderer.send(SET_CONNECTION_STORAGE_METHOD, {
        configName: DATABASE_CONFIG,
        parameters
    })

export const deleteConnection = (uuid: string) =>
    ipcRenderer.send(REMOVE_CONNECTION_STORAGE_METHOD, {
        configName: DATABASE_CONFIG,
        uuid
    })

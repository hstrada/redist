const { ipcMain } = require('electron');
const Store = require('electron-store');
const schema = require('./schema');

const store = new Store({ schema });

ipcMain.on('loadStorage', (event, _arg) => {
  event.returnValue = store.get(_arg);
});

ipcMain.on('setStorage', (event, _arg) => {
  const configName = _arg.configName;
  const parameters = _arg.parameters;
  const connections = store.get(configName);
  const values = [...(connections || []), parameters];
  store.set(configName, values);
});

ipcMain.on('removeFromStorage', (event, _arg) => {
  const configName = _arg.configName;
  const uuid = _arg.uuid;
  const connections = store.get(configName);
  const values = connections.filter((item) => item.id !== uuid);
  store.set(configName, values);
});

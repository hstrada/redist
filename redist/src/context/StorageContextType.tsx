import React, { createContext, useEffect, useState } from 'react';
import {
  deleteConnection,
  getConfig,
  persistConnection
} from '../services/storage';
import { Connection } from './models/Storage';
import { connectDb } from '../services/db/createConnection';

export interface StorageContextType {
  connections: Connection[];
  createConnection(name: string, url: string, port: number): void;
  updateConnection(uuid: string): void;
  removeConnection(uuid: String): void;
  //   updateConnection(storage: Storage): void;
}

export const StorageContext = createContext<StorageContextType>({
  connections: [],
  createConnection: () => {},
  updateConnection: () => {},
  removeConnection: () => {}
  //   updateConnection: () => {}
});

const StorageProvider = (props: any) => {
  const [connections, setConnections] = useState<Connection[]>();

  const updateConnection = (uuid: string) => {
    const currentConnection = connections.find((item) => item.id === uuid);
    connectDb(currentConnection.url, currentConnection.port);
  };

  const removeConnection = (uuid: string) => {
    console.log(uuid, 'uuuuuid')
    deleteConnection(uuid);
    const a = setConnections(getConfig());
    console.log(a);
  };

  const createConnection = (name: string, url: string, port: number) => {
    const connection: Connection = new Connection(name, url, port);
    persistConnection(connection);
    connectDb(url, port);
    setConnections(getConfig());
  };

  useEffect(() => {
    setConnections(getConfig());
  }, []);

  return (
    <StorageContext.Provider
      value={{
        connections,
        createConnection,
        updateConnection,
        removeConnection
      }}
    >
      {props.children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;

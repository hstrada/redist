import React, { createContext, useEffect, useState } from 'react';
import { getConfig, setConnection } from '../services/storage';
import { Connection } from './models/Storage';
import { connectDb } from '../services/db/createConnection';

export interface StorageContextType {
  connections: Connection[];
  createConnection(name: string, url: string, port: number): void;
  //   removeConnection(storage: Storage): void;
  //   updateConnection(storage: Storage): void;
}

export const StorageContext = createContext<StorageContextType>({
  connections: [],
  createConnection: () => {}
  //   removeConnection: () => {},
  //   updateConnection: () => {}
});

const StorageProvider = (props: any) => {
  const [connections, setConnections] = useState<Connection[]>();

  const createConnection = (name: string, url: string, port: number) => {
    const connection: Connection = new Connection(name, url, port);
    setConnection(connection);
    connectDb(url, port);
    setConnections(getConfig());
  };

  useEffect(() => {
    setConnections(getConfig());
  }, []);

  return (
    <StorageContext.Provider value={{ connections, createConnection }}>
      {props.children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;

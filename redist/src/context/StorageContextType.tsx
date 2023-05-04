import React, { createContext, useEffect, useState } from 'react';
import { getConfig } from '../services/storage';

export interface StorageContextType {
  connections: Storage[];
  //   addConnection(name: string, url: string, port: number): void;
  //   removeConnection(storage: Storage): void;
  //   updateConnection(storage: Storage): void;
}

export const StorageContext = createContext<StorageContextType>({
  connections: []
  //   addConnection: () => {},
  //   removeConnection: () => {},
  //   updateConnection: () => {}
});

const StorageProvider = (props: any) => {
  const [storageConnections, setStorageConnections] = useState<Storage[]>();

  useEffect(() => {
    setStorageConnections(getConfig());
  }, []);

  return (
    <StorageContext.Provider value={{ connections: storageConnections }}>
      {props.children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;

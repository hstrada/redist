import React from 'react';
import './app.css';
import { Menu } from './components/Menu';
import { Content } from './components/Content';
import StorageProvider from './context/StorageContextType';

export function App() {
  return (
    <StorageProvider>
      <div className="app">
        <aside className="o-aside">
          <Menu />
        </aside>
        <main className="o-main">
          <Content />
        </main>
        <footer className="o-footer">Footer</footer>
      </div>
    </StorageProvider>
  );
}

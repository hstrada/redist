import React, { useEffect } from 'react';
import './app.css';
import { Menu } from './components/Menu';
import { Content } from './components/Content';
import { getConfig } from './services/storage';

export function App() {
  useEffect(() => {
    // console.log(getConfig());
  }, []);

  return (
    <div className="app">
      <aside className="o-aside">
        <Menu />
      </aside>
      <main className="o-main">
        <Content />
      </main>
      <footer className="o-footer">Footer</footer>
    </div>
  );
}

import React, { useEffect } from 'react';
import './app.css';
import { Menu } from './components/Menu';
import { Content } from './components/Content';
import { getConfig, setConnection } from './services/storage';
import { uuid } from './services/utils/uuid';

export function App() {
  useEffect(() => {
    console.log(getConfig());
    // setConnection({
    //   id: uuid(),
    //   name: '[stg] localhost',
    //   url: 'localhost',
    //   port: 6379
    // });
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

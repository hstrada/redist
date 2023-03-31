import React from 'react';
import './app.css';
import { Menu } from './components/Menu';
import { Content } from './components/Content';

export function App() {
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

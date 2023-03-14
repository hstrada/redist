import React from 'react';
import './app.css';
import { Menu } from './components/Menu';
import { Keys } from './components/Keys';

export function App() {
  return (
    <div className="app">
      <aside className="o-aside">
        <Menu />
      </aside>
      <main className="o-main">
        <Keys />
      </main>
      <footer className="o-footer">Footer</footer>
    </div>
  );
}

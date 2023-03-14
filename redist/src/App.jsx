import React from 'react';
// import { builder } from './connection';
import './app.css';

export function App() {
  // React.useEffect(() => {
  //   builder();
  // }, []);

  return (
    <div className="app">
      <aside className="o-aside"></aside>
      <main className="o-main">Main</main>
      <footer className="o-footer">Footer</footer>
    </div>
  );
}

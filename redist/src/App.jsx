import React from 'react';
// import { builder } from './connection';
import './app.css';

export function App() {
  // React.useEffect(() => {
  //   builder();
  // }, []);

  return (
    <>
      <aside className="o-aside">Aside</aside>
      <main className="o-main">
        <div className="o-keys">conteudo</div>
        <div className="o-values">conteudo</div>
      </main>
      <footer className="o-footer">Footer</footer>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

function Hello() {
  return (
    <main>
      <section>
        <h1>Hello</h1>
        <Link to="/">HOME</Link>
      </section>
    </main>
  );
}

export default Hello;

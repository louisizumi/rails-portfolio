import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const App = () => {
  return (
    <div className="flex--main">
      <Navbar />
      <main>
        <h1>Hello</h1>
      </main>
      <Footer />
    </div>
  );
};

export default App;
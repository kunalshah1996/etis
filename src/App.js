
import './App.css';
import React from 'react'

import { Header, Footer } from './containers';
import { Navbar } from './components';

const App = () => {
  return (
    <div>
      <div className='App'>
        <div>
          <Navbar />

        </div>
        <div className='header'>
          <Header />
        </div>
        <div>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App
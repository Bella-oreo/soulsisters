import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Heading from './Heading';
import Message from './Message';
import Banner from './components/Banner';

function App() {
  

  return (
    <>
      <Heading/>
      <Message/>
      <Banner/>
    </>

  )
}

export default App

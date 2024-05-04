import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import "./App.css"
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { action, originals, horror, comedy, romance, documentaries } from './urls';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;

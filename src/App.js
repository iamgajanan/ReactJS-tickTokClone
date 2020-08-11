import React from 'react';
import Video from './Components/Video'
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>This is Tick tok on React Js</h1>
      <div className="app_videos">
     <Video/>
     <Video/>
     <Video/>
     <Video/>
     <Video/>
     </div>
    </div>
  );
}

export default App;

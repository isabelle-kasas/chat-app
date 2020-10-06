import React from 'react';
import Contact from './component/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
      <Contact 
        name="Carl Barnett"
        avatar="https://randomuser.me/api/portraits/men/27.jpg"
        status="status-online"
        text="status-text"
        online
      />
      <Contact
        name="Stacey Jensen"
        avatar="https://randomuser.me/api/portraits/women/81.jpg"
        status="status-offline"
        text="status-text"
      />
      <Contact
        name="Joan Lambert"
        avatar="https://randomuser.me/api/portraits/women/43.jpg"
        status="status-online"
        text="status-text"
        online
      />
    </div>
  );
}



export default App;

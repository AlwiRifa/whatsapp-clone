import React from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import './App.css';


function App() {
    return (
        <div className="app">
          <div className="app__body">
             <Sidebar />
             <Chat />
          </div>
        </div>
    )
}


export default App
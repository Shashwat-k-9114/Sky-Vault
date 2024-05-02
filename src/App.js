import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useParams, Link } from "react-router-dom"
import "../views/includes/footer.ejs"
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);
  
  return (
    <Router>
      {/* < */}
    </Router>
  )
  // return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  // );
}

export default App;

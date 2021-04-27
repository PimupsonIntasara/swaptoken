// import React from 'react';
import React from "react";

// import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";
// import "antd/dist/antd.css";
import Index from "./jsx";
import { Lines } from "react-preloaders";

function App() {
  return (
    <div className="App">
      <Index />
      <Lines />
    </div>
  );
}

export default App;

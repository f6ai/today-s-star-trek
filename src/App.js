import React from "react";

import MainContent from "./components/main-content/main-content.component";
import Header from "./components/header/header.component";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
    </div>
  );
};

export default App;

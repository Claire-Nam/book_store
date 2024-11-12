import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Content from "./layout/content";
import Footer from "./layout/footer";

function App() {
  return (
    <div className="App">
      <Content />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Content from "./layout/content";
import Footer from "./layout/footer";
import { HookCallback } from "./hookTest";
// import { HookMemo } from "./hookTest";

function App() {
  return (
    <div className="App">
      {/* <HookRef /> */}
      {/* <HookMemo /> */}
      <HookCallback />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

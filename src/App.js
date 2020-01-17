import React from "react";
import Header from "./components/Header";
import "./App.scss";
import SkillBars from "./components/Skills";
import "./components/skills.scss";
import ImageGridList from "./components/Projects";
import ScrollUp from "./components/ScrollUp";
import Nav from "./components/Button";
import FormPage from "./components/FormPage";

const SKILLS = [
  { type: "HTML", level: 80 },
  { type: "CSS", level: 75 },
  { type: "JavaScript", level: 60 },

  { type: "BootStrap", level: 70 },
  { type: "React.js", level: 60 },
  { type: "Node", level: 40 }
];

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <SkillBars hue="300" saturation="40" skills={SKILLS} />
      <ImageGridList />

      <ScrollUp />
      <FormPage />
    </div>
  );
}

export default App;

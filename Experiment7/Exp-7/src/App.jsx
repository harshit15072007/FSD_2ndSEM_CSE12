import React from "react";
import StudentCard from "./StudentCard";
function App(){
  return (
    <div className="App">
      <h1>Student Card</h1>
      <StudentCard name="Harshit" marks="100" course="B.Tech CSE" />
      <StudentCard name="Harshita" marks="99" course="B.Tech CSE-AI" />
      <StudentCard name="Harsh" marks="98" course="B.Tech CSE-ML" />
    </div>
  );
}
export default App;
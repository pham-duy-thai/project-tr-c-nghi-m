import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Results from "./components/Results.jsx";

function App() {

  return (
    <>
     <div className= "container">
      <h1> Quiz vui lập trình</h1>
      <Quiz />
      <Results />
     </div>
    </>
  )
}

export default App

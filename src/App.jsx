import React, { useState } from "react";
import Header from "./components/Header";
// import UserInputs from "./components/UserInputs";
import Resault from "./components/Result";
import Input from "./components/Input";



function App() {

  const [initial, setInitial] = useState();

  const handleInitial = (value) =>{
    setInitial(value);
  }

  const [annual, setAnnual] = useState();

  const handleAnnual = (value) =>{
    setAnnual(value);
  }

  const [expected, setExpected] = useState();

  const handleExpected = (value) =>{
    setExpected(value);
  }

  const [duration, setDuration] = useState();

  const handleDuration = (value) =>{
    setDuration(value);
  }


  

  return (
    <>
      <Header/>
      <section id="user-input">
      <div className="input-group">
        <Input name='Initial Investment'  onInputChange={handleInitial}/>
        <Input name='Annual Investment' onInputChange={handleAnnual}/>
      </div>
      <div className="input-group">
        <Input name='Expected Return' onInputChange={handleExpected}/>
        <Input name='Duration' onInputChange={handleDuration}/>
      </div>
      </section>
      <section id="resault-section">
      {duration && expected && annual && initial > 0  ? (
        <Resault initial={initial} annual={annual} expected={expected} duration={duration}/>
      ): (
        <div id="result"><p>Uzupełnij wszystkie pola w formularzu aby przeliczyć swoją inwestycję</p></div>
      )}
      </section>
    </>
    
  )
}

export default App

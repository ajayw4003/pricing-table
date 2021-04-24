import React, { useState } from 'react';
import './App.css';
import Heading from "./Components/Heading/Heading";
import SizeAndPricing from "./Components/SizeAndPricing/SizeAndPricing";
import { fixedPrice } from "./Components/SizeAndPricing/fixedPrice";

function App() {
  const [fixedArr, setfixedArr] = useState(fixedPrice);
  const [optionArr, setoptionArr] = useState(Array(9).fill("-"));

  return (
    <div className="container">
      hello
      <Heading 
        fixedArr = { fixedArr } 
        setfixedArr ={ setfixedArr } 
        optionArr = {optionArr}
        setoptionArr = { setoptionArr }
        />
      <SizeAndPricing 
      fixedArr = { fixedArr } 
      setfixedArr ={ setfixedArr }
      optionArr = {optionArr}
      setoptionArr = { setoptionArr }
      />
      
    </div>
  );
}

export default App;

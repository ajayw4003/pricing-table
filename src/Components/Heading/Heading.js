import React from 'react';
import "./Heading.css";
import Choose from "./choose"

const Heading = ({fixedArr, setfixedArr, optionArr, setoptionArr}) => {


    return (
        <div className = "heading">
            <div  className = "item" id = "currency">Currency</div>
            <div  className = "item">1 Person</div>
            <div  className = "item">2 Persons</div>
            <div  className = "item">3 Persons</div>
            <div  className = "item">Pet</div>
            <div  className = "item">
            Lanscape
            /House
            </div>
            <Choose 
                className = "item" 
                fixedArr = { fixedArr } 
                setfixedArr ={ setfixedArr }
                optionArr = {optionArr}
                setoptionArr = {setoptionArr}
                />
        </div>
    );
};

export default Heading;
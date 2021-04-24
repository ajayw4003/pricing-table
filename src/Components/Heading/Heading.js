import React from 'react';
import "./Heading.css";
import Choose from "./choose"

const Heading = () => {
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
            <Choose className = "item choose"/>
        </div>
    );
};

export default Heading;
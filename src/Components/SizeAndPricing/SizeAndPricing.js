import React, { useState } from 'react';
import { fixedPrice } from "./fixedPrice";
import "./SizeAndPricing.css";


const SizeAndPricing = () => {
    const [width, setWidth] = useState(0);
    const [length, setLength] = useState(0);
    const [person1, setperson1] = useState("-");
    const [person2, setperson2] = useState("-");
    const [person3, setperson3] = useState("-");
    const [pet, setpet] = useState("-");
    const [house, sethouse] = useState("-")
    const [choose, setchoose] = useState("-")


    const handleClick =() =>{
        if(width !== 0 && length !== 0){
            var pricePerson2 = "-";
            var pricePerson3 = "-";
            var pricePerson1 = Math.ceil((length * width)*0.042);
            var house = Math.ceil((length * width)*0.052);
            var pet = Math.ceil((length * width)*0.032);
            setpet(pet);
            setperson1(pricePerson1);
            if(length * width > 945){
                pricePerson2 = pricePerson1 + 30;
                setperson2(pricePerson2);
                sethouse(house);
                setpet(pet+30);
            }
            if(length * width > 1200){
                pricePerson3 = pricePerson2 + 30;
                setperson3(pricePerson3);
                sethouse(house + 60);
                setpet(pet+30);
            }
            if(length * width > 2000){
                sethouse(house + 80);
                setpet(pet+60);
                setchoose("-");
            }
        }
    }

    return (
        <div className = "listBlock">
            {fixedPrice.map((item, i) => (
                <div key = {i} className = "listPrice">
                    <div className = "price" id = "col1" >{item.size}</div>
                    <div className = "price">{item.personPrice1}</div>
                    <div className = "price">{item.personPrice2}</div>
                    <div className = "price">{item.personPrice3}</div>
                    <div className = "price">{item.pet}</div>
                    <div className = "price">{item.lanscape}</div>
                    <div className = "price lastCol">{item.choose}</div>
                </div>

            ))}
            <div className = "listPrice">
                <div className = "priceC" id = "col1">
                    <h4> Custom-Size </h4>
                    <div>
                        <input type = "text" placeholder = "width" onChange = {(e) =>setWidth(e.target.value)}/> x
                        <input type = "text" placeholder= "height" onChange = {(e) =>setLength(e.target.value)}/>
                    </div>
                    <button style = {{margin: "5px"}} onClick = {handleClick}>Apply</button>
                </div>
                <div className = "priceC">{person1}</div>
                <div className = "priceC">{person2}</div>
                <div className = "priceC">{person3}</div>
                <div className = "priceC">{pet}</div>
                <div className = "priceC">{house}</div>
                <div className = "priceC lastCol">{choose}</div>
            </div>
        </div>
    );
};

export default SizeAndPricing;
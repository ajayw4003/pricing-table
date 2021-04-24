import React from 'react';


const Choose = ({fixedArr, setfixedArr, optionArr, setoptionArr}) => {

    const priceArr = [0, 0, 0, 120, 130, 140, 155, 160, 170, 180]
    const rate = [0, 0, 0, 0.34, 0.45, 0.55, 0.60, 0.65, 0.70, 0.80]

    const handelPersonChange = (val) => {
        if(val === "0" || val === "1" || val === "2" || val === "3"){
            let modifiedArr = Array(9).fill("-");
            setoptionArr(modifiedArr);
            return;
        }else{
            if(val === "4" || val === "5" || val === "6" || val === "7" || val === "8"){
                let modifiedArr = [...optionArr];
                setoptionArr(modifiedArr);
                if(val === "4"){
                    let index = Number(val);
                    while(index <= 10){
                        let allcost = Math.ceil(index*priceArr[index-1]*rate[3]);
                        console.log(allcost);
                        modifiedArr[index-1] = allcost;
                        index++;
                    }
                    setoptionArr(modifiedArr);
                }else if(val === "5"){
                    let index = 4;
                    while(index <= 10){
                        let allcost = Math.ceil(index*priceArr[index-1]*rate[4]);
                        console.log(allcost);
                        modifiedArr[index-1] = allcost;
                        index++;
                    }
                    setoptionArr(modifiedArr);
                }
                else if(val === "6"){
                    let index = 4;
                    while(index <= 10){
                        let allcost = Math.ceil(index*priceArr[index-1]*rate[5]);
                        console.log(allcost);
                        modifiedArr[index-1] = allcost;
                        index++;
                    }
                    setoptionArr(modifiedArr);
                }
                else if(val === "7"){
                    let index = 4;
                    while(index <= 10){
                        let allcost = Math.ceil(index*priceArr[index-1]*rate[6]);
                        console.log(allcost);
                        modifiedArr[index-1] = allcost;
                        index++;
                    }
                    setoptionArr(modifiedArr);
                }
                else if(val === "8"){
                    let index = 4;
                    while(index <= 10){
                        let allcost = Math.ceil(index*priceArr[index-1]*rate[7]);
                        console.log(allcost);
                        modifiedArr[index-1] = allcost;
                        index++;
                    }
                    setoptionArr(modifiedArr);
                }
            }

        }
    }

    return (
        <div className ="item choose">
            <div>Choose Option</div>
            <div className = "personSelect">
                <div>Person</div>
                    <select className = "select" onChange = {(e) => handelPersonChange(e.target.value)}>
                    <option value = "0">0</option>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                    <option value = "4">4</option>
                    <option value = "5">5</option>
                    <option value = "6">6</option>
                    <option value = "7">7</option>
                    <option value = "8">8</option>
                    <option value = "9">9</option>
                    <option value = "10">10</option>
                    <option value = "11">11</option>
                    <option value = "12">12</option>
                </select>
            </div><br />
            <div className = "personSelect">
                <div>Pet</div>
                    <select className = "select">
                    <option value = "0">0</option>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                    <option value = "4">4</option>
                    <option value = "5">5</option>
                    <option value = "6">6</option>
                    <option value = "7">7</option>
                    <option value = "8">8</option>
                    <option value = "9">9</option>
                    <option value = "10">10</option>
                    <option value = "11">11</option>
                    <option value = "12">12</option>
                </select>
            </div>
        </div>
    );
};

export default Choose;
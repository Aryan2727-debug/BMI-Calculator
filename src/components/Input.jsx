import React from "react";
import { useState } from "react";
import "./Input.css";

function Input(){
    
    var white = "white";
    var black = "black";
    var yellow = "yellow";
    var green = "green";
    var orange = "orange";
    var red = "red";

    const [weight , setWeight] = useState(0);
    const [height , setHeight] = useState(0);
    const [status , setStatus] = useState("");
    const [bgColor , setBgColor] = useState(white);
    const [color , setColor] = useState(black);

    function handleWeight(event){
         setWeight(event.target.value);
    };

    function handleHeight(event){
         setHeight(event.target.value);
    };

    var bmi = weight/(height*height);

    const [result , setResult] = useState(0);

    function showResult(){

        setResult(bmi.toFixed(2) + " kg/m²");

        if(bmi < 18.5){
            setStatus("Underweight");
            setBgColor(yellow);
            setColor(black);
        }

        else if(bmi > 18.5 && bmi <= 24.9){
            setStatus("Healthy");
            setBgColor(green);
            setColor(white);
        }

        else if(bmi >=25 && bmi <= 29.9){
            setStatus("Overweight");
            setBgColor(orange);
            setColor(white);
        }

        else{
            setStatus("Obese");
            setBgColor(red);
            setColor(white);
        }
    };

    return(
        <>
         <div className="input-wrapper">
            <input onChange={handleWeight} type="number" className="weight_input" placeholder="Enter your Weight"/>
            <input onChange={handleHeight}  type="number" className="height_input" placeholder="Enter your Height"/>
         </div>

         <p className="weight_heading">Weight(in KG)</p>
         <p className="height_heading">Height(in M)</p>
         
         <br/>
         <br/>

         <div className="button-wrapper">
            <button onClick={showResult} className="btn btn-warning btn-md">Calculate BMI</button>
        </div>

        <br/>
        <br/>

        <div className="result-wrapper">
            <div className="result_div">
               <h2>Your Result is {result}</h2>
            </div>
        </div>

        <div className="formula-wrapper">
           <div className="formula_div">
               <h2 style={{color : "white"}}>Formula used:-</h2>
               <img style={{height : "120px" , width : "300px"}} src="bmi.png" alt="image"/>
           </div>
        </div>

        <div className="range-wrapper">
           <h2 style={{color : "white"}}>BMI Range chart:-</h2>
           <div className="range_div">
             <p>Healthy BMI Range: 18.5 kg/m² - 24.9 kg/m²</p>
             <p>Underweight BMI Range: less than 18.5 kg/m² </p>
             <p>Overweight BMI Range: between 25 kg/m² and 29.9 kg/m²</p>
             <p>Obese BMI Range: above 30 kg/m²</p>
           </div>
        </div>

        <div className="status-wrapper">
          <h2 style={{color : "white"}}>Your Status:-</h2>
          <div style={{backgroundColor : bgColor , color : color}} className="status_div">
            {status}
          </div>
        </div>

        <div className="chart-wrapper">
          <h2 style={{color : "white"}}>BMI Adult Graph:-</h2>
          <div className="chart_div">
             <img style={{height : "300px" , width : "450px"}} src="bmi-chart.gif" alt="image"/>
          </div>
        </div>

        <div className="info-wrapper">
          <h2 style={{color : "white"}}>What is BMI?</h2>
          <div className="info_div">
             <p>BMI is a measurement of a person's leanness <br/>or corpulence based on their height and weight.<br/>
             It is widely used as a general indicator of whether <br/> a person has a healthy body weight for their height.</p>
          </div>
        </div>

        </>
    );
};

export default Input;

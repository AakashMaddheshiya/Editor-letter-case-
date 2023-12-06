import React, { useState } from "react";

export default function About(props) {
    // const [myStyle ,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'

    // })

    let myStyle={
      color:props.mode=='dark'?'white':'#1b4c93',
      backgroundColor:props.mode=='dark'?'#1b4c93':'white'
    }



  return (
    <div className="Container mx-5" >
        <h1  style={{color:props.mode==='dark'?'white':'#1b4c93'}} >About Us</h1>
      <div className="accordion " id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample" 
          >
            <div className="accordion-body" style={myStyle} >
              Textutils gives you a way to analyze text quickly and efficiently.Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
               <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              Textutils is a free character tool that provides instant charcter count & word count statistics.for a given text. Textutils rports the number of words and characters ,
              Thus   It is suitable for writting text with word /charcter limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatile</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software wordks in we  browsers 
                such as chrome ,firefox ,Internate Explorer ,Safari ,Opera.It suits  to count
               character in facebook ,blog books ,excel doucument ,pdf document ,essays etc . It is
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
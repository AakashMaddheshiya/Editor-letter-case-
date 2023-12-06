// import React from "react";
import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    console.log("uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase","success")
  };
  const handleloclick = () => {
    console.log("uppercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase","success")
  };
  const handleclearclick = () => {
    let newtext = " ";
    setText(newtext);
    props.showAlert("Text has been Cleared","success")
  };
  const handlesplitclick = () => {
    // console.log("uppercase was clicked"+text);
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Space have been removed","success")
  };
  const handleOnchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text="new text"wrong way to change the state
  // setText("new text")//correct way to change the state
  return (
    <>
      <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnchange}
            value={text}
            id="mybox"
            rows="8" style={{backgroundColor:props.mode ==='dark'?'#0f65bb':'white',color:props.mode ==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 " onClick={handleupclick}>
          Convert To Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloclick}>
          Convert To lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclearclick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlesplitclick}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minuts read</p>
        <p>Preview</p>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}

import React,{useState} from 'react'


export default function TextForm(props) {
    
    const handleUpclick = ()=>{
        console.log("Uppercase click was clicked!!"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }

    const handleLowclick = ()=>{
      console.log("Lowercase was clicked!!"+text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success");
  }

    const handleOnchange = (event)=>{
        console.log("Onchange click was clicked!!");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
      console.log("I am copy");
      var text=document.getElementById("text");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied to clipboard","success");

    }

    const handleExtraSpaces = ()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extra spaces","success");
    }

    
    const[text,setText]=useState("");

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1> 
      <div className="mb-3">
        <label htmlFor="text" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="text" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowclick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy the text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      
      
      
    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

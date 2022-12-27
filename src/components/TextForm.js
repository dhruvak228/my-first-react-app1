import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpclick = ()=>{
        console.log("Uppercase click was clicked!!"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowclick = ()=>{
      console.log("Uppercase click was clicked!!"+text);
      let newText=text.toLowerCase();
      setText(newText);
  }

    const handleOnchange = (event)=>{
        console.log("Onchange click was clicked!!");
        setText(event.target.value);
    }
    
    const[text,setText]=useState("");

  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1> 
      <div className="mb-3">
        <label htmlFor="text" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnchange} id="text" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowclick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

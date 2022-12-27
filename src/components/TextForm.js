import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleclick = ()=>{
        console.log("Uppercase click was clicked!!"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleOnchange = (event)=>{
        console.log("Onchange click was clicked!!");
        setText(event.target.value);
    }
    
    const[text,setText]=useState("Enter text here");

  return (
    <div>
    <h1>{props.heading}</h1> 
      <div className="mb-3">
        <label htmlFor="text" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnchange} id="text" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleclick}>Convert to Uppercase</button>
    </div>
  )
}

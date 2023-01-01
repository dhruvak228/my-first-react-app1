// import About from "./About";

import { useState } from "react";
import Alert from "./Alert";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";

function App() {
  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
    
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
    }
  }

  return (
    <>
 <Navbar title="TextUtils" about="aboutTextUtils" mode={mode} toggleMode={toggleMode}/> 
{/* <Navbar/> */}
<Alert alert={alert}/>
<div className="container my-3">
 <TextForm heading="Enter your text here to analyze" mode={mode} showAlert={showAlert}/> 
{/* <About/> */}
</div>
    </>
  );
}

export default App;

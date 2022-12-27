import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";


function App() {
  return (
    <>
 <Navbar title="TextUtils" about="aboutTextUtils"/> 
{/* <Navbar/> */}
<div className="container my-3">
<TextForm heading="Enter your text here to analyze"/>
</div>
    </>
  );
}

export default App;

import React, {useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState("enter the text ")
    const handleeOnClick1=(e)=>{
        e.preventDefault()
        let upText=text.toUpperCase()
        setText(upText)
        props.showAlert("Converted to Uppercase","success")

       
    }
    const handleeOnClick2=(e)=>{
      e.preventDefault()
      let lowText=text.toLowerCase()
      setText(lowText)
      props.showAlert("Converted to Lowercase","success")
  }
    const handleeOnClick3=(e)=>{
        e.preventDefault()
        let regex=/\s+/g
        setText(text.replace(regex,' '))
        props.showAlert("Removed extra spaces","success")

    }
    const handleeOnClick4=(e)=>{
        e.preventDefault()
        setText('')
      props.showAlert("Cleared Text","success")

    }
    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
  return (
    <div style={{color:props.theme==="light"?"black":"white" }}>
      <form>
  
 
  <h1>{props.heading}</h1>
  <div className="form-group">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.theme==="light"?"white":"grey" ,color:props.theme==="light"?"black":"white" }}id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary my-1" id="myButton1"onClick={handleeOnClick1}>Convert to uppercase</button>
  <button className="btn btn-primary mx-2" id="myButton1"onClick={handleeOnClick2}>Convert to lowercase</button>
  <button className="btn btn-primary" id="myButton2"onClick={handleeOnClick3}>Remove Extra space</button>
  <button className="btn btn-danger mx-2" id="myButton2"onClick={handleeOnClick4}>clear</button>

</form>
 <div className="container my-3">
  <h2>Your text summary</h2>
  <p>{text.split(" ").filter((word)=>word!=="").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").filter((word)=>word!=="").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"enter the text in the text area to preview it here"}</p>
 </div>
    </div>
   
  )
}

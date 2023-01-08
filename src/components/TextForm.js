import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked")
        const textNew=text.toUpperCase();
        setText(textNew)
    }
    const handlelowClick=()=>{
        console.log("Uppercase was clicked")
        const textNew=text.toLowerCase();
        setText(textNew)
    }
    const handleOnchange=(event)=>{
        console.log('on-change')
        setText(event.target.value)
    }
    const [text,setText]=useState("Enter your text here2");
  return (
    <>
    <div className="container"  style={{color: props.mode==="dark"?"white":"dark"}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==="dark"?'grey':'white', color:props.mode==="dark"?'white':"dark" }} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>click here to uperCase</button>
    <button className="btn btn-primary mx-2" onClick={handlelowClick}>click here to lowerCase</button>
    </div>
    <div className="container my-3" style={{color: props.mode==="dark"?'white':'dark'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} text</p>
        <p>{0.008*text.split(" ").length} time to read the words</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}


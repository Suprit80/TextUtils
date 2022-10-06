import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase.", "success");
    };

    const handleClearClick = ()=> {
        let newText = ("");
        setText(newText);
        props.showAlert("Text has been cleared.", "success");
    };

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase.", "success");
    };

    const handleExtraSpaces = ()=> {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra Spaces.", "success");
    }

    const handleCopy = ()=> {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard.", "success");
    }

    const calitalizeEachWord = ()=> {
        let newText = text.split(" ");
        for (var i=0; i<newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        let finalText = newText.join(" ");
        setText(finalText);
        props.showAlert("Capitaized each word.", "success");
    }
    
    const handleOnChange = (event)=> {
        setText(event.target.value)
    };
    
    const [text, setText] = useState("");

  return (
    <>
    <div className='container' style={{backgroundColor: props.mode === 'light'?'dark':'light'}}>
        <h1 style={{color: props.mode === 'light'?'#042743':'white'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="10" style={{backgroundColor: props.mode === 'light'?'white':'#042743', color: props.mode === 'light'?'black':'white'}} value={text} placeholder="Enter text here" onChange={handleOnChange}></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-2' onClick={calitalizeEachWord}>Calitalize Each Word</button>
    </div>
    <div className='container my-3' style={{color: props.mode === 'light'?'#042743':'white'}}>
        <h2 style={{color: props.mode === 'light'?'#042743':'white'}}>Your text Summary</h2>
        <p><b>{text.split(" ").filter(word => word !== "").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").length}</b> Minutes to read</p>
        <h2 style={{color: props.mode === 'light'?'#042743':'white'}}>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it."}</p>
    </div>
    </>
  )
}

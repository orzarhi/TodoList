import React,{useState} from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  
  const handleChange = (e) => {
    const newValue= e.target.value
    setInputText(newValue);
  }

  return (
    <div className="form">
    <input type="text" value={inputText} onChange={handleChange}/>
    <button onClick={()=>{
      props.onAdd(inputText);
      setInputText("");
    }}>
      <span>Add</span>
    </button>
  </div>
  )
}

export default InputArea;

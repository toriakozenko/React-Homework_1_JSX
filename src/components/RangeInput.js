import { useState } from "react";

function RangeInput({min, max}) {
  const [state, setState] = useState(false);

  function listenOnChange(event){
    const value = event.target.value;

    value.length < min || value.length > max ? setState(true) : setState(false);
  }

  return ( <input type="text" onChange={listenOnChange} onBlur={() => setState(false)} style={{borderColor: state ? 'red' : 'black', outline: 'none'}}/> );
}

export default RangeInput;
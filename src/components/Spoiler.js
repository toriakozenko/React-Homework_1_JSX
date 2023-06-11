import { useState } from "react";

function Spoiler({header, open, children}) {
  const [state, setState] = useState(open);

  function toggleContentHandler(){
    setState(!state);
  }

  return (
    <div onClick={toggleContentHandler} style={{cursor: 'pointer'}}>
      {header}
      {state && children}
    </div>
  );
}

export default Spoiler;
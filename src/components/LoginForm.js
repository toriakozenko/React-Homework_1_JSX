import { useState } from "react";

function LoginForm({onLogin}) {
  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  function listenLoginInputChange(event){
    const value = event.target.value;
    value.length ? setButtonDisabled(false) : setButtonDisabled(true);
    setLogin(value);
  }

  function listenPasswordInputChange(event) {
    const value = event.target.value;
    value.length ? setButtonDisabled(false) : setButtonDisabled(true);
    setPassword(value);
  }
  
  
  return ( 
    <div className="form-container">
      <input name="login" type="text" defaultValue={login} onChange={listenLoginInputChange} />
      <input name="password" type="password" defaultValue={password} onChange={listenPasswordInputChange} />
      <button disabled={buttonDisabled} onClick={() => onLogin(login, password)}>Login</button>
    </div>
   );
}

export default LoginForm;
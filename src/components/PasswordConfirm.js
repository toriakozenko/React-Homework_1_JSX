import { useState } from "react";

function PasswordConfirm({min}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  function handlePasswordChange(event) {
    const value = event.target.value;
    value.length > min ? setPassword(value) : setPassword(console.log('not enough symbols in 1 input'));
  }

  function handleConfirmPasswordChange(event) {
    const value = event.target.value;
    setConfirmPassword(value);
  }

  function comparePasswords() {
    password === confirmPassword ? console.log('passwords are compare') : console.log('passwords are not compare')
  }
  
  comparePasswords();

  return ( 
    <div className="form-container">
      <input type="password" placeholder="enter your password" defaultValue={password} onChange={handlePasswordChange}/>
      <input type="password" placeholder="repeat your password" defaultValue={confirmPassword} onChange={handleConfirmPasswordChange}/>
    </div>
  );
}

export default PasswordConfirm;
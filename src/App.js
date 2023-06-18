import Spoiler from './components/Spoiler';
import RangeInput from './components/RangeInput';
import LoginForm from './components/LoginForm';
import PasswordConfirm from './components/PasswordConfirm';
import Timer from './components/Timer';
import TimerControl from './components/TimerControl';
import TimerContainer from './components/TimerContainer';
import Watch from './components/Watch';

function App() {
  
  function onLogin(login, password) {
    console.log(`Your login: ${login}, Your password: ${password}`);
  }
  
  const SecondsTimer = ({seconds}) => <h2>{seconds}</h2>


  const TimerLCD = ({seconds}) => {
    const formatTime = time => {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
  
      return (
        `${hours} : ${minutes} : ${seconds}`
      )
    };
    return (
      <div>
          {formatTime(seconds)}
        </div>
    )
  }

  return (
    <div className="App">
       <Spoiler header={<h1>Lorem Ipsum</h1>} open>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
      </Spoiler>
      <hr/>
      <RangeInput min={2} max={10} />
      <hr/>
      <LoginForm onLogin={onLogin} />
      <hr/>
      <PasswordConfirm min={2} />
      <hr/>
      <Timer sec={55240}/> 
      <hr/>     
      <TimerControl />
      <hr />
      <TimerContainer seconds={55240} refresh={1000} Render={SecondsTimer}/>
      <hr />
      <TimerContainer seconds={55240} refresh={1000} Render={TimerLCD} />
      <hr />
      <Watch />
      <hr />
    </div>
  );
}

export default App;

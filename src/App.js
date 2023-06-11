import Spoiler from './components/Spoiler';
import RangeInput from './components/RangeInput';

function App() {
  return (
    <div className="App">
      <Spoiler header={<h1>Lorem Ipsum</h1>} open>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
      </Spoiler>

      <RangeInput min={2} max={10}/>
    </div>
  );
}

export default App;

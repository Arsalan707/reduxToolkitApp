import './App.css';
import Counter from './features/counter/Counter';
import Coin from './features/coin/Coin';

function App() {
  return (
    <div className="App">
      <h1 className="App-header ">redux toolkit</h1>
      <Counter />
      <Coin />
    </div>
  );
}

export default App;

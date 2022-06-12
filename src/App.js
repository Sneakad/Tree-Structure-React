import './App.css';
import Treemap from './Components/Treemap';
import data from './json/trees'


function App() {
  return (
    <div className="App">
      <h1>Nested Tree in React</h1>
      <Treemap data={data} />
    </div>
  );
}

export default App;

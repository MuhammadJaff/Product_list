import './App.css';
import Data from './Data';
import FilterableProductTable from './FilterableProductTable'

function App() {

  return (
    <div className="App">
      <FilterableProductTable alldata = {Data}/>
    </div>
  );
}

export default App;

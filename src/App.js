import OthelloCalc from './components/OthelloCalc';
import { DataProvider } from './context/CalculationData';
function App() {

  return (
    <div className="App">
      <DataProvider>
        <OthelloCalc />
      </DataProvider>
    </div>
  );
}

export default App;

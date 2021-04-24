import './App.css';
import PatientManagement from './components/PatientManagement';
import ReducerCount from './components/ReducerCount';

function App() {
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;

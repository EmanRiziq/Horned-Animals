import 'bootstrap/dist/css/bootstrap.min.css';
import Headerc from './component/headerc';
import HornyMain from './component/HornyMain';
import Footerc from './component/footerc';

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
        <Headerc />
        <HornyMain />
        <Footerc />
      </header>
    </div>
  );
}

export default App;

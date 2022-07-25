import 'bootstrap/dist/css/bootstrap.min.css';
import Nav1 from './component/navbar';
import MyCard from './component/Card';
import Headerc from './component/headerc';
import HornyMain from './component/HornyMain';
import Footerc from './component/footerc';
import { Navbar } from 'react-bootstrap';

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
        <Nav1 />
        <Headerc />
        <HornyMain />
        <MyCard />
        <Footerc />
      </header>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import Headerc from './component/headerc';
import HornyMain from './component/HornyMain';
import Footerc from './component/footerc';
import { useState } from "react"
import SelectedBeast from './component/SelectedBeast';

function App() {
  const [openModal, setOPenModal] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Headerc />
        <button
          onClick={() => { setOPenModal(true) }}
        >Click me
        </button>
        {openModal && <SelectedBeast closeModal={setOPenModal}/>}
        <HornyMain />
        <Footerc />
      </header>
    </div>
  );
}

export default App;

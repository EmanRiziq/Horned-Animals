import 'bootstrap/dist/css/bootstrap.min.css';
import Headerc from './component/headerc';
import HornyMain from './component/HornyMain';
import Footerc from './component/footerc';
import React from "react"
import SelectedBeast from './component/SelectedBeast';
import data from './component/data.json';
import Formc from './component/Formc';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeast: data,
      selectedBeast: {},
      showModal: false,
      hornsNum: 2
    }
  }
  displayModal = (beast) => {
    this.setState({
      selectedBeast: beast,
      showModal: true

    })
  }
  handleClose = () => {
    this.setState({ showModal: false })
  }
  getHornsNum = (horns) => {
    this.setState({ hornsNum: horns })

    console.log(horns);
  }
  render() {
    return (
      <div >
        <h1>test</h1>
        <Headerc />
        <Formc getHornsNum={this.getHornsNum} />
        <HornyMain allBeast={this.state.allBeast} displayModal={this.displayModal} hornsNum={this.state.hornsNum} />
        <SelectedBeast show={this.state.showModal} handleClose={this.handleClose} selectedBeast={this.state.selectedBeast} />
        <Footerc />
      </div>
    );
  }
}

export default App;

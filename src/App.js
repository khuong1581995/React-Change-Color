import React, { Component } from 'react';
import './App.css';
import Contructor from './components/Contructor';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/ChangeSize';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: ['red', 'blue', 'yellow', 'green'],
      fontsize: 14,
      picker: "red"
    };

  }

  DefaulSize = () => {
    this.setState({ fontsize: 14, picker: "red" })
  }
  render() {

    return (
      <div className="container mt-50">
        <div className="row">

          <div className="row">
            <ColorPicker colors={this.state.colors}
              handleColor={(color) => this.setState({ picker: color })}
            />
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting fontsize={this.state.fontsize}
                ChangeSize={(number) => this.setState({ fontsize: this.state.fontsize + number })}
              />

            </div>
            <Contructor
              picker={this.state.picker}
              fontsize={this.state.fontsize}
            />
          </div>
        </div>
        <button onClick={this.DefaulSize} type="button" className="btn btn-primary mt-50" >Reset</button>

      </div >
    );
  }
}

export default App;

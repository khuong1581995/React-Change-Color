import React, { Component } from 'react';

class ColorPicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            picker: [],
            active: 'red'
        };

    }
    changeColor = (color) => {
        this.setState({
            active: color
        })
        this.props.handleColor(color)

    }

    render() {
        var elmColor = this.props.colors.map((color, index) => {

            return <span key={index}
                style={{ padding: "10px", backgroundColor: color, margin: '6px', cursor: 'pointer' }}
                className={this.state.active === color ? " active" : ""}
                onClick={() => this.changeColor(color)}
            > Color</span >

        });
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color picker</h3>
                    </div>
                    <div className="panel-body">
                        {elmColor}
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;

import React, { Component } from 'react';

class SizeSetting extends Component {
    changeSize(number) {
        this.props.ChangeSize(number)

    }
    render() {
        return (

            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">Size:{this.props.fontsize} px</h3>
                </div>
                <div className="panel-body">
                    <button onClick={() => this.changeSize(-1)} type="button" className="btn btn-success" >Giảm</button>
                    <button onClick={() => this.changeSize(1)} type="button" className="btn btn-danger" >Tăng</button>
                </div>
            </div>

        );
    }
}

export default SizeSetting;

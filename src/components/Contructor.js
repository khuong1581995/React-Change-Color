import React, { Component } from 'react';

class Contructor extends Component {

    render() {


        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color: {this.props.picker}- Fontsize: {this.props.fontsize} px</p>
                <div id="content" style={{ fontSize: this.props.fontsize, color: this.props.picker, borderColor: this.props.picker }} >
                    Nội Dung Setting
                </div>


            </div>

        );
    }
}

export default Contructor;

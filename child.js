'use strict';

import React from "react";

class Child extends React.Component{

    render(){
        return(
            <div>
                <li>Child name: {this.props.name}</li>
            </div>
            );
    }
}

export default Child;
'use strict';

import React from "react";

class Parent extends React.Component{

    render(){
        return(
            <div>
                <ul>{this.props.children}</ul>
            </div>
            );
    }
}

export default Parent;
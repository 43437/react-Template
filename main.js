'use strict';

import React from "react";
import CavasComponent from './CanvasComponent'
import SVGMain from './svgmain'
import Name from './name'
import Parent from './parent'
import Child from './child'

class Main extends React.Component{

    render(){
        return(
            <div>
                <Name/>
                <SVGMain/>
                <CavasComponent/>
                <p>Child in Parent</p>
                <Parent>
                    <Child name="C1"/>
                    <Child name="C2"/>
                    <Child name="C3"/>
                </Parent>
            </div>
            );
    }
}

export default Main;
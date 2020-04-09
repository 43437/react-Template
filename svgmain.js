'use strict';

import React from "react";
import { SVG } from '@svgdotjs/svg.js'

class SVGMain extends React.Component{

    componentDidMount(){
        this.updateCanvas();
    }

    componentDidUpdate(){
        this.updateCanvas();
    }

    updateCanvas(){
        var ctx = this.refs.drawing;
        var draw = SVG().addTo(ctx).size(300, 300)
        draw.path('M0 0 H50 A20 20 0 1 0 100 50 v25 C50 125 0 85 0 85 z')
        var rect = draw.rect(100, 100).animate().move(100, 100).attr({ fill: '#f33' })
    }

    render(){

        return(
            <div ref="drawing">
            </div>
            );
    }
}

export default SVGMain;
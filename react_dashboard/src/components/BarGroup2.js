import React from 'react';
import PropTypes from 'prop-types';

function BarGroup2(props) {
    let barPadding = 2
    let barColour = '#1e9e6b'
    let widthScale = d => d * 1.5
  
    let width = widthScale(props.d.cantidad)
    let yMid = props.barHeight * 0.5
  
    return <g className="bar-group">
      <text className="name-label2" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.descripcion}</text>
      <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
      <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{props.d.cantidad}</text>
    </g>
  }

  export default BarGroup2;
import React from 'react';
import PropTypes from 'prop-types';

function BarGroup(props) {
    let barPadding = 2
    let barColour = '#348AA7'
    let widthScale = d => d * 10
  
    let width = widthScale(props.d.cantidad)
    let yMid = props.barHeight * 0.5
  
    return <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.nombre}</text>
      <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
      <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{props.d.cantidad}</text>
    </g>
  }

  export default BarGroup;
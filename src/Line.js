import React, { Component } from "react";
import "./Line.css";
import styled from "styled-components";

const LineCaption = styled.h2`
  font-size: 32px; /* Размер шрифта */
  font-weight: bold;
`;

export default class Line extends Component {
  render() {
    return (
      <div class="line">
        <LineCaption>{this.props.caption}</LineCaption>
        {/* <div class="test_row"> */}
        <div class="row">{this.props.children}</div>
        {/* </div> */}
      </div>
    );
  }
}

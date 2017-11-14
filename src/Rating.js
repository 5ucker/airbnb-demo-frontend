import React, { Component } from "react";
import "./Rating.css";
import styled from "styled-components";
import star from "./images/star.svg";

const RatingText = styled.span`
  padding: 8px;
  font-size: 12px;
`;

export default class Rating extends Component {
  render() {
    return (
      <div>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <RatingText>
          {this.props.rating} {this.props.unit}
        </RatingText>
      </div>
    );
  }
}

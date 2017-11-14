import React, { Component } from "react";
import "./CardImg.css";
import styled from "styled-components";

import right from "./images/right.svg";

const CardPct = styled.img`width: 100%;`;

const NextPageBox = styled.div`
  left: 100%;
  top: 50%;
  margin-left: -25px;
  margin-top: -20px;
  height: 40px;
  width: 40px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 20px;
  border-shadow: 0, 2px rgba(72, 72, 72, 0.16);
  position: absolute;
  _background: rgba(255, 255, 255, 0.8);
`;
const NextPageImg = styled.img`
  margin-top: 11px;
  margin-left: 16px;
`;
const NextPageContainer = styled.div`position: relative;`;

class NextPage extends Component {
  render() {
    return (
      <NextPageContainer>
        {this.props.children}
        <NextPageBox>
          <NextPageImg src={right} alt="" />
        </NextPageBox>
      </NextPageContainer>
    );
  }
}

export default class CardImg extends Component {
  render() {
    const isLast = this.props.isLast;
    if (isLast) {
      return (
        <NextPage>
          <CardPct src={this.props.src} alt={this.props.alt} />
        </NextPage>
      );
    }
    return <CardPct src={this.props.src} alt={this.props.alt} />;
  }
}

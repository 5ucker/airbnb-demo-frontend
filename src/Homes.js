import React, { Component } from "react";
import "./Homes.css";
import styled from "styled-components";
import Line from "./Line.js";
import CardImg from "./CardImg.js";
import Rating from "./Rating.js";

import homes_1 from "./images/homes/1.svg";
import homes_2 from "./images/homes/2.svg";
import homes_3 from "./images/homes/3.svg";

const HomesCardBox = styled.div`
  margin-right: 18px;
  margin-left: 0px;
`;

const HomesCardCaption = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const HomesCardDesc = styled.div`
  font-size: 15px;
  font-weight: normal;
`;

class HomesCard extends Component {
  render() {
    return (
      <div class="col4">
        <a>
          <HomesCardBox>
            <CardImg
              src={this.props.img}
              alt={this.props.name}
              isLast={this.props.isLast}
            />
            <HomesCardCaption>
              ${this.props.price}
              {this.props.name}
            </HomesCardCaption>
            <HomesCardDesc>
              {this.props.type} - {this.props.beds} beds
            </HomesCardDesc>
            <Rating rating={this.props.hosts} unit="Superhost" />
          </HomesCardBox>
        </a>
      </div>
    );
  }
}

export default class HomesLine extends Component {
  render() {
    return (
      <Line caption="Homes">
        <HomesCard
          img={homes_1}
          name="La Salentina, see, nature & relax"
          price="82"
          stars="5"
          hosts="97"
          type="Entire house"
          beds="9"
        />
        <HomesCard
          img={homes_2}
          name="Your private 3 bedr. riad and exclusi…"
          price="82"
          stars="5"
          hosts="161"
          type="Entire house"
          beds="5"
        />
        <HomesCard
          img={homes_3}
          name="Dreamy Tropical Tree House"
          price="200"
          stars="5"
          hosts="264"
          type="Entire treehouse"
          beds="1"
          isLast={true}
        />
      </Line>
    );
  }
}

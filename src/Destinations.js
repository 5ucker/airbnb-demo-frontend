import React, { Component } from "react";
import "./Reservations.css";
import styled from "styled-components";
import Line from "./Line.js";
import CardImg from "./CardImg.js";

import destinations_1 from "./images/destinations/1.svg";
import destinations_2 from "./images/destinations/2.svg";
import destinations_3 from "./images/destinations/3.svg";
import destinations_4 from "./images/destinations/4.svg";
import destinations_5 from "./images/destinations/5.svg";
import destinations_6 from "./images/destinations/6.svg";

const DestinationsCardCaption = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const DestinationsCardBox = styled.div`
  margin-right: 17px;
  margin-left: 0px;
  margin-bottom: 64px;]
`;

class DestinationsCard extends Component {
  render() {
    return (
      <div class="col2">
        <a>
          <DestinationsCardBox>
            <CardImg
              src={this.props.img}
              alt={this.props.name}
              isLast={this.props.isLast}
            />
            <DestinationsCardCaption>{this.props.name}</DestinationsCardCaption>
          </DestinationsCardBox>
        </a>
      </div>
    );
  }
}

export default class DestinationsLine extends Component {
  render() {
    return (
      <Line caption="Featured destinations">
        <DestinationsCard img={destinations_1} name="Paris" />
        <DestinationsCard img={destinations_2} name="Miami" />
        <DestinationsCard img={destinations_3} name="Tokyo" />
        <DestinationsCard img={destinations_4} name="Cape town" />
        <DestinationsCard img={destinations_5} name="Seoul" />
        <DestinationsCard
          img={destinations_6}
          name="Los Angeles"
          isLast={true}
        />
      </Line>
    );
  }
}

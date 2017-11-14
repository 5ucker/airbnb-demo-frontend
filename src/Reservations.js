import React, { Component } from "react";
import "./Reservations.css";
import styled from "styled-components";
import Line from "./Line.js";
import CardImg from "./CardImg.js";

import reservations_1 from "./images/reservations/1.svg";
import reservations_2 from "./images/reservations/2.svg";
import reservations_3 from "./images/reservations/3.svg";
import reservations_4 from "./images/reservations/4.svg";

const ReservationsCardBox = styled.div`
  margin-right: 17px;
  margin-left: 0px;
`;

const ReservationsCardPlace = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

const ReservationsCardCaption = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ReservationsCardPrice = styled.div`
  font-size: 18px;
  font-weight: normal;
  mix-blend-mode: normal;
  opacity: 0.9;
`;

class ReservationsCard extends Component {
  render() {
    return (
      <div class="col3">
        <a>
          <ReservationsCardBox>
            <CardImg
              src={this.props.img}
              alt={this.props.name}
              isLast={this.props.isLast}
            />
            <ReservationsCardPlace>{this.props.place}</ReservationsCardPlace>
            <ReservationsCardCaption>{this.props.name}</ReservationsCardCaption>
            <ReservationsCardPrice>
              About ${this.props.price} per person
            </ReservationsCardPrice>
          </ReservationsCardBox>
        </a>
      </div>
    );
  }
}

export default class ReservationsLine extends Component {
  render() {
    return (
      <Line caption="Popular reservations around the world">
        <ReservationsCard
          img={reservations_1}
          place="Speakeasy"
          name="Chumley’s"
          price="60"
        />
        <ReservationsCard
          img={reservations_2}
          place="Korean gastropub"
          name="Hanjan"
          price="50"
        />
        <ReservationsCard
          img={reservations_3}
          place="German american"
          name="Prime Meats"
          price="55"
        />
        <ReservationsCard
          img={reservations_4}
          place="Fine seafood"
          name="Seaprice"
          price="70"
          isLast={true}
        />
      </Line>
    );
  }
}

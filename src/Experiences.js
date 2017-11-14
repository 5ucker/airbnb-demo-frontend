import React, { Component } from "react";
import "./Experiences.css";
import styled from "styled-components";

import Line from "./Line.js";
import CardImg from "./CardImg.js";
import Rating from "./Rating.js";

import experiences_1 from "./images/experiences/1.svg";
import experiences_2 from "./images/experiences/2.svg";
import experiences_3 from "./images/experiences/3.svg";
import experiences_4 from "./images/experiences/4.svg";

const ExperiencesCardBox = styled.div`margin-right: 17px;`;
const ExperiencesCardCaption = styled.span`font-size: 15px;`;

class ExperiencesCard extends Component {
  render() {
    return (
      <div class="col3">
        <a>
          <ExperiencesCardBox>
            <CardImg
              src={this.props.img}
              alt={this.props.name}
              isLast={this.props.isLast}
            />
            <div>
              <ExperiencesCardCaption>
                <b>${this.props.price} </b>
                {this.props.name}
                {this.props.children}
              </ExperiencesCardCaption>
              <Rating rating={this.props.reviews} unit="reviews" />
            </div>
          </ExperiencesCardBox>
        </a>
      </div>
    );
  }
}
export default class ExperiencesLine extends Component {
  render() {
    return (
      <Line caption="Experiences">
        <ExperiencesCard
          img={experiences_1}
          name="Forest therapy"
          price="29"
          stars="5"
          reviews="44"
        />
        <ExperiencesCard
          img={experiences_2}
          name="Whale watching"
          price="69"
          stars="5"
          reviews="46"
        />
        <ExperiencesCard
          img={experiences_3}
          name="Table Mountain Summit, Cable Car Down"
          price="69"
          stars="5"
          reviews="44"
        />
        <ExperiencesCard
          img={experiences_4}
          name="Salsa Night"
          price="50"
          stars="5"
          reviews="44"
          isLast={true}
        />
      </Line>
    );
  }
}

import React, { Component } from "react";
import "./Explore.css";
import styled from "styled-components";

import explore_Homes from "./images/explore/Homes.svg";
import explore_Experiences from "./images/explore/Experiences.svg";
import explore_Restaurants from "./images/explore/Restaurants.svg";

import Line from "./Line.js";

const ExploreCardBox = styled.div`
  text-align: left;
  margin-right: 18px;
  margin-left: 0px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  border-shadow: 0, 2px rgba(72, 72, 72, 0.08);
  _display: block;
  _display: inline;
  _display: inline-block;
`;

const ExploreCardImg = styled.img`vertical-align: middle;`;

const ExploreCardCaption = styled.div`
  vertical-align: middle;
  padding: 24px;
  display: inline;
`;

class ExploreCard extends Component {
  render() {
    return (
      <div class="col4">
        <a>
          <ExploreCardBox>
            <ExploreCardImg src={this.props.img} alt={this.props.name} />
            <ExploreCardCaption class="ExploreCardCaptionStyle">
              {this.props.name}
            </ExploreCardCaption>
          </ExploreCardBox>
        </a>
      </div>
    );
  }
}

export default class ExploreLine extends Component {
  render() {
    return (
      <Line caption="Explore AirBnB">
        <ExploreCard img={explore_Homes} name="Homes" />
        <ExploreCard img={explore_Experiences} name="Experiences" />
        <ExploreCard img={explore_Restaurants} name="Restaurants" />
      </Line>
    );
  }
}

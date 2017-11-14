import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./Header.js";
import ExploreLine from "./Explore.js";
import ExperiencesLine from "./Experiences.js";
import HomesLine from "./Homes.js";
import ReservationsLine from "./Reservations.js";
import DestinationsLine from "./Destinations.js";
import AboutLine from "./About.js";

export const DataBox = styled.div`
  padding-left: 81px;
  padding-right: 59px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataBox>
          <Header />
        </DataBox>
        <DataBox>
          <ExploreLine />
          <ExperiencesLine />
          <HomesLine />
          <ReservationsLine />
          <DestinationsLine />
        </DataBox>
        <DataBox>
          <AboutLine />
        </DataBox>
      </div>
    );
  }
}

export default App;

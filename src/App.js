import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

import logo_airbnb from "./images/logo_airbnb.svg";
import logo_airbnb_gray from "./images/logo_airbnb_gray.svg";
import search from "./images/search.svg";
import star from "./images/star.svg";
import right from "./images/right.svg";

import twitter from "./images/social/twitter.svg";
import facebook from "./images/social/facebook.svg";
import instagram from "./images/social/instagram.svg";

import explore_Homes from "./images/explore/Homes.svg";
import explore_Experiences from "./images/explore/Experiences.svg";
import explore_Restaurants from "./images/explore/Restaurants.svg";

import experiences_1 from "./images/experiences/1.svg";
import experiences_2 from "./images/experiences/2.svg";
import experiences_3 from "./images/experiences/3.svg";
import experiences_4 from "./images/experiences/4.svg";

import homes_1 from "./images/homes/1.svg";
import homes_2 from "./images/homes/2.svg";
import homes_3 from "./images/homes/3.svg";

import reservations_1 from "./images/reservations/1.svg";
import reservations_2 from "./images/reservations/2.svg";
import reservations_3 from "./images/reservations/3.svg";
import reservations_4 from "./images/reservations/4.svg";

import destinations_1 from "./images/destinations/1.svg";
import destinations_2 from "./images/destinations/2.svg";
import destinations_3 from "./images/destinations/3.svg";
import destinations_4 from "./images/destinations/4.svg";
import destinations_5 from "./images/destinations/5.svg";
import destinations_6 from "./images/destinations/6.svg";

export const ColoredBox = styled.div`background: rgba(255, 0, 0, 0.3);`;

export const DataBox = styled.div`
  padding-left: 81px;
  padding-right: 59px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

export const HeaderBox = styled.div`
  _background: rgba(255, 0, 0, 0.3);
  height: 80px;
  line-height: 80px;
  position: relative;
  text-align: right;
`;

export const LogoImg = styled.img`
  position: absolute;
  height: 30px;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const SearchInput = styled.input`
  position: absolute;
  height: 48px;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-left: 81px;
  padding-left: 50px;
  left: 8.6666%;
  width: 40%;
  background: url(${search}) 16px 12px no-repeat;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  border-shadow: 0, 2px rgba(72, 72, 72, 0.08);
  outline: none;
`;

export const NavLink = styled.a`
  padding: 10px 10px 10px 10px;
  height: 24px;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 14px; /* Размер шрифта */
  color: #383838;
`;

class Header extends Component {
  render() {
    return (
      <HeaderBox>
        <LogoImg src={logo_airbnb} alt="Логотип" />
        <SearchInput type="text" placeholder="Try Miami" />
        <NavLink href="">Become a host</NavLink>
        <NavLink href="">Help</NavLink>
        <NavLink href="">Sign up</NavLink>
        <NavLink href="">Log in</NavLink>
      </HeaderBox>
    );
  }
}

export const LineCaption = styled.h2`
  font-size: 32px; /* Размер шрифта */
  font-weight: bold;
`;

export const ExploreCardBox = styled.div`
  _background: rgba(255, 0, 0, 0.3);
  text-align: left;
  margin-right: 18px;
  margin-left: 0px;
  _vertical-align: middle;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  border-shadow: 0, 2px rgba(72, 72, 72, 0.08);
`;

export const ExploreCardImg = styled.img`vertical-align: middle;`;
export const ExploreCardCaption = styled.span`
  vertical-align: middle;
  padding: 24px;
`;

class Line extends Component {
  render() {
    return (
      <div>
        <LineCaption>{this.props.caption}</LineCaption>
        <div class="row">{this.props.children}</div>
      </div>
    );
  }
}

class ExploreCard extends Component {
  render() {
    return (
      <div class="col4">
        <ExploreCardBox>
          <ExploreCardImg src={this.props.img} alt={this.props.name} />
          <ExploreCardCaption>{this.props.name}</ExploreCardCaption>
        </ExploreCardBox>
      </div>
    );
  }
}
class ExploreLine extends Component {
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

export const ExperiencesCardBox = styled.div`margin-right: 17px;`;
export const HomesCardBox = styled.div`
  margin-right: 18px;
  margin-left: 0px;
`;
export const ReservationsCardBox = styled.div`
  margin-right: 17px;
  margin-left: 0px;
`;
export const DestinationsCardBox = styled.div`
  margin-right: 17px;
  margin-left: 0px;
  margin-bottom: 64px;]
`;

export const AboutCardBox = styled.div`
  margin-right: 18px;
  margin-left: 0px;
  margin-top: 48px;
  margin-bottom: 48px;
`;

export const ExperiencesCardCaption = styled.span`font-size: 15px;`;
export const RatingText = styled.span`
  padding: 8px;
  font-size: 12px;
`;
class Rating extends Component {
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

export const NextPageBox = styled.div`
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
  background: rgba(255, 255, 255, 0.8);
`;
export const NextPageImg = styled.img`
  margin-top: 11px;
  margin-left: 16px;
`;
export const NextPageContainer = styled.div`position: relative;`;
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

class CardImg extends Component {
  render() {
    const isLast = this.props.isLast;
    if (isLast) {
      return (
        <NextPage>
          <img src={this.props.src} alt={this.props.alt} />
        </NextPage>
      );
    }
    return <img src={this.props.src} alt={this.props.alt} />;
  }
}

class ExperiencesCard extends Component {
  render() {
    return (
      <div class="col3">
        <ExperiencesCardBox>
          <CardImg
            src={this.props.img}
            alt={this.props.name}
            isLast={this.props.isLast}
          />
          <ExperiencesCardCaption>
            <b>${this.props.price} </b>
            {this.props.name}
            {this.props.children}
          </ExperiencesCardCaption>
          <Rating rating={this.props.reviews} unit="reviews" />
        </ExperiencesCardBox>
      </div>
    );
  }
}
class ExperiencesLine extends Component {
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
export const HomesCardCaption = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
export const HomesCardDesc = styled.div`
  font-size: 15px;
  font-weight: normal;
`;

export const ReservationsCardPlace = styled.div`
  font-size: 10px;
  font-weight: bold;
`;
export const ReservationsCardCaption = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
export const ReservationsCardPrice = styled.div`
  font-size: 18px;
  font-weight: normal;
  mix-blend-mode: normal;
  opacity: 0.9;
`;

export const DestinationsCardCaption = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

class HomesCard extends Component {
  render() {
    return (
      <div class="col4">
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
      </div>
    );
  }
}

class HomesLine extends Component {
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

class ReservationsCard extends Component {
  render() {
    return (
      <div class="col3">
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
      </div>
    );
  }
}

class ReservationsLine extends Component {
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

class DestinationsCard extends Component {
  render() {
    return (
      <div class="col2">
        <DestinationsCardBox>
          <CardImg
            src={this.props.img}
            alt={this.props.name}
            isLast={this.props.isLast}
          />
          <DestinationsCardCaption>{this.props.name}</DestinationsCardCaption>
        </DestinationsCardBox>
      </div>
    );
  }
}

class DestinationsLine extends Component {
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

export const Select = styled.select`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  font-size: 18px;
  height: 48px;
  width: 100%;
  color: #383838;
  margin-bottom: 16px;
`;

export const AboutHeader = styled.h3`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 16px;
`;
export const AboutLinkBox = styled.div`
  font-size: 15px;
  margin-top: 8px;
`;

export const AboutLinkText = styled.span`
  font-size: 15px;
  margin-right: 16px;
  vertical-align: middle;
`;

export const AboutLogo = styled.img`
  margin-right: 12px;
  vertical-align: middle;
`;
export const LastBox = styled.div`line-height: 100%;`;

class AboutLine extends Component {
  render() {
    return (
      <div class="row">
        <div class="col3">
          <AboutCardBox>
            <Select>
              <option>English</option>
              <option>Russian</option>
            </Select>
            <Select>
              <option>United States dollar</option>
              <option>Russian Rouble</option>
            </Select>
          </AboutCardBox>
        </div>
        <div class="col1" />
        <div class="col3">
          <AboutCardBox>
            <AboutHeader>Airbnb</AboutHeader>
            <AboutLinkBox>About us</AboutLinkBox>
            <AboutLinkBox>Careers</AboutLinkBox>
            <AboutLinkBox>Press</AboutLinkBox>
            <AboutLinkBox>Policies</AboutLinkBox>
            <AboutLinkBox>Help</AboutLinkBox>
            <AboutLinkBox>Diversity & Belonging</AboutLinkBox>
          </AboutCardBox>
        </div>
        <div class="col3">
          <AboutCardBox>
            <AboutHeader>Discover</AboutHeader>
            <AboutLinkBox>Trust & Safety</AboutLinkBox>
            <AboutLinkBox>Travel Credit</AboutLinkBox>
            <AboutLinkBox>Gift Cards</AboutLinkBox>
            <AboutLinkBox>Airbnb Citizen</AboutLinkBox>
            <AboutLinkBox>Business Travel</AboutLinkBox>
            <AboutLinkBox>Guidebooks</AboutLinkBox>
            <AboutLinkBox>Airbnbmag</AboutLinkBox>
          </AboutCardBox>
        </div>
        <div class="col2">
          <AboutCardBox>
            <AboutHeader>Hosting</AboutHeader>
            <AboutLinkBox>Why Host</AboutLinkBox>
            <AboutLinkBox>Hospitality</AboutLinkBox>
            <AboutLinkBox>Responsible Hosting</AboutLinkBox>
            <AboutLinkBox>Community Center</AboutLinkBox>
          </AboutCardBox>
        </div>
        <div class="col2">
          <LastBox>
            <AboutLogo src={logo_airbnb_gray} alt="Логотип" />© Airbnb Inc.
          </LastBox>
        </div>
        <div class="col6" />
        <div class="col4">
          <LastBox>
            <AboutLinkText>Terms</AboutLinkText>
            <AboutLinkText>Privacy</AboutLinkText>
            <AboutLinkText>Site map</AboutLinkText>
            <AboutLogo src={facebook} alt="facebook" />
            <AboutLogo src={twitter} alt="twitter" />
            <AboutLogo src={instagram} alt="instagram" />
          </LastBox>
        </div>
      </div>
    );
  }
}

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

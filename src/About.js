import React, { Component } from "react";
import "./Header.css";
import styled from "styled-components";

import logo_airbnb_gray from "./images/logo_airbnb_gray.svg";

import twitter from "./images/social/twitter.svg";
import facebook from "./images/social/facebook.svg";
import instagram from "./images/social/instagram.svg";

const AboutCardBox = styled.div`
  margin-right: 18px;
  margin-left: 0px;
  margin-top: 48px;
  margin-bottom: 48px;
`;

const Select = styled.select`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  font-size: 18px;
  height: 48px;
  width: 100%;
  color: #383838;
  margin-bottom: 16px;
`;

const AboutHeader = styled.h3`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const AboutLinkBox = styled.div`
  font-size: 15px;
  margin-top: 8px;
`;

const AboutLinkText = styled.span`
  font-size: 15px;
  margin-right: 16px;
  vertical-align: middle;
`;

const AboutLogo = styled.img`
  margin-right: 12px;
  vertical-align: middle;
`;

const LastBox = styled.div`line-height: 100%;`;

export default class AboutLine extends Component {
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

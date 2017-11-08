import React, { Component } from "react";
import logo_airbnb from "./images/logo_airbnb.svg";
import search from "./images/search.svg";
import "./App.css";
import styled from "styled-components";

export const ColoredBox = styled.div`background: rgba(255, 0, 0, 0.3);`;

export const TopBox = styled.div`
  padding-left: 81px;
  padding-right: 81px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

export const HeaderBox = styled.div`
  _background: rgba(255, 0, 0, 0.3);
  height: 80px;
  line-height: 80px;
  position: relative;
  text-align: right;
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
      <TopBox>
        <HeaderBox>
          <LogoImg src={logo_airbnb} alt="Логотип" />
          <SearchInput type="text" placeholder="Try Miami" />
          <NavLink href="">Become a host</NavLink>
          <NavLink href="">Help</NavLink>
          <NavLink href="">Sign up</NavLink>
          <NavLink href="">Log in</NavLink>
        </HeaderBox>
      </TopBox>
    );
  }
}

export const LineCaption = styled.h2`
  color: #383838;
  font-size: 32px; /* Размер шрифта */
  font-weight: bold;
`;

class Line extends Component {
  render() {
    return (
      <div>
        <LineCaption>{this.props.children}</LineCaption>
        <div>dd</div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Line>Explore AirB'n'B</Line>
      </div>
    );
  }
}

export default App;

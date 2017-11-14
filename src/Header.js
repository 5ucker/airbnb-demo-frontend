import React, { Component } from "react";
import "./Header.css";
import styled from "styled-components";
import logo_airbnb from "./images/logo_airbnb.svg";
import search from "./images/search.svg";

const HeaderBox = styled.div`
  height: 80px;
  line-height: 80px;
  position: relative;
  text-align: right;
`;

const LogoImg = styled.img`
  position: absolute;
  height: 30px;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const SearchInput = styled.input`
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

const NavLink = styled.a`
  padding: 10px 10px 10px 10px;
  height: 24px;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 14px; /* Размер шрифта */
  color: #383838;
`;

export default class Header extends Component {
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

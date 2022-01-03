import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";
import { MdOutlineMenu } from "react-icons/md";
import { GrClose } from "react-icons/gr";

export default class SideNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  /* Write the necessary functions to show and hide the side bar on small devices */

  render() {
    const { isOpen } = this.state;

    const toggle = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };

    return (
      <div>
        <Hamburger onClick={toggle} isOpen={isOpen}>
          <MdOutlineMenu />
        </Hamburger>
        <Close onClick={toggle} isOpen={isOpen}>
          <GrClose />
        </Close>
        <SideNavBarCont isOpen={isOpen}>
          {/* Implement a hamburger icon slide in effect for small devices */}
          <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
            Wesley <ArrowImg src={Arrow} alt="arrow" />
            <NavIcon></NavIcon>
          </SideNavMainLink>
          <SideNavMainLink className="menu_nav_link" to="/discover">
            Discover <SearchImg src={SearchWhite} />
            <NavIcon search></NavIcon>
          </SideNavMainLink>
          <SideNavHeader>
            <HeaderText>Watched</HeaderText>
          </SideNavHeader>
          <NavLink className="menu_nav_link" to="/watched/movies">
            Movies
          </NavLink>
          <NavLink className="menu_nav_link" to="/watched/tv-shows">
            Tv Shows
          </NavLink>
          <SideNavHeader>
            <HeaderText>Saved</HeaderText>
          </SideNavHeader>
          <NavLink className="menu_nav_link" to="/saved/movies">
            Movies
          </NavLink>
          <NavLink className="menu_nav_link" to="/saved/tv-shows">
            Tv Shows
          </NavLink>
        </SideNavBarCont>
      </div>
    );
  }
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 260px;
  height: 100%;
  margin-right: 45px;

  background-color: ${colors.sideNavBar};

  @media screen and (max-width: 800px) {
    display: ${({ isOpen }) => (isOpen ? " block" : "none")};
  } ;
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const NavIcon = styled.div`
  position: absolute;
  right: 35px;
  top: 50%;
`;

const SideNavHeader = styled.div`
  color: white;
  padding: 25px 35px;
`;

const HeaderText = styled.div`
  color: white;

  font-weight: 600;
  border-bottom: 0.2px solid white;
`;

const NavLink = styled(Link)`
  display: block;
  color: white;
  padding: 5px 35px;
  font-weight: 100;
`;

const ArrowImg = styled.img`
  padding-left: 40px;
`;
const SearchImg = styled.img`
  padding-left: 30px;
`;
const Hamburger = styled.span`
  width: 60px;
  font-size: 40px;
  display: ${({ isOpen }) => (isOpen ? "none" : "inline-block")};
  height: 50px;
  margin-top: 40px;
  padding-left: 290px;

  @media screen and (min-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 700px) {
    padding-left: 250px;
  }
  @media screen and (max-width: 500px) {
    padding-left: 180px;
  }
  @media screen and (max-width: 400px) {
    padding-left: 120px;
  }
`;
const Close = styled(Hamburger)`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

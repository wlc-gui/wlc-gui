import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Route, Routes } from 'react-router-dom';
import General from "./general";
import Security from "./security";

export default function PSK() {
  const [selectedMenu, setSelectedMenu] = useState('General');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  }

  return (
    <>
      <State>WLANs ⭢ Edit 'PSK'</State>
      <ButtonContainer>
        <StyledNavLink to="/wlans/psk/general" onClick={() => handleMenuClick('General')} selected={selectedMenu === 'General'}>
          General
        </StyledNavLink>
        <StyledNavLink to="/wlans/psk/security" onClick={() => handleMenuClick('Security')} selected={selectedMenu === 'Security'}>
          Security
        </StyledNavLink>
      </ButtonContainer>
      <Wrapper selectedMenu={selectedMenu}>
        <Routes>
          <Route path="general/*" element={<General/>}/>
          <Route path="security/*" element={<Security/>}/>
        </Routes>
      </Wrapper>
    </>
  );
}

const State = styled.div`
  color: #aca7a4;
  font-size: 1.8rem;
  font-weight: 700;
  position: relative;
  left: 350px;
  top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: baseline;
  width: 50%;
  position: absolute;
  left: 30%;
  top: 22.65%;
  gap: 1%;
`;

const NavLinkBase = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  border: solid 1px black;
  border-bottom: none;
  border-bottom: #f0f0f0;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  font-size: 130%;
  font-weight: 700;
  z-index: 99;
  cursor: pointer;
`;

const StyledNavLink = styled(NavLinkBase)`
  background-color: ${props => props.selected ? '#f0f0f0' : '#96BDFF'};
  /* color: ${props => props.selected ? '#fff' : 'black'}; */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: baseline;
  padding: ${({ selectedMenu }) => selectedMenu === 'General' ? '5%' : '2% 5% 2% 5%'};
  background-color: #f0f0f0;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border: solid 1px #000;
  width: 50%;
  height: 40%;
  position: relative;
  top: 13vh;
  left: 30%;
`;
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, Route, Routes } from 'react-router-dom';
import General from "./general";
import Security from "./security";

export default function EAP () {
  const [selectedEAPMenu, setSelectedEAPMenu] = useState(() => {
    const storedEAPMenu = localStorage.getItem('selectedEAPMenu');
    return storedEAPMenu || 'General';
  });

  useEffect(() => {
    localStorage.setItem('selectedEAPMenu', selectedEAPMenu);
  }, [selectedEAPMenu])

  const handleMenuClick = (menu) => {
    setSelectedEAPMenu(menu);
  }

  return(
    <>
    <State>WLANs ⭢ Edit 'EAP'</State>
    <ButtonContainer>
      <StyledNavLink to="/wlans/eap/general" onClick={() => handleMenuClick('General')} selected={selectedEAPMenu === 'General'}>
        General
      </StyledNavLink>
      <StyledNavLink to="/wlans/eap/security/layer2" onClick={() => handleMenuClick('Security')} selected={selectedEAPMenu === 'Security'}>
        Security
      </StyledNavLink>
    </ButtonContainer>
    <Wrapper selectedMenu={selectedEAPMenu}>
      <Routes>
        <Route path="general" element={<General/>}/>
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
  top: 21.85%;
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
  padding: 5%;
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
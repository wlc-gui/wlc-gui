import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, Route, Routes } from 'react-router-dom';
import Layer2 from "./layer2";
import Server from "./servers";

export default function Security() {
  const [selectedOpt, setSelectedOpt] = useState(() => {
    const storedOpt = localStorage.getItem('selectedOpt');
    return storedOpt || 'Layer2';
  });

  useEffect(() => {
    localStorage.setItem('selectedOpt', selectedOpt);
  }, [selectedOpt]);

  const handleMenuClick = (option) => {
    setSelectedOpt(option);
  }

  return (
    <>
      <ButtonContainer selected={selectedOpt === 'Layer2'}>
        <StyledNavLink to="/wlans/eap/security/layer2" onClick={() => handleMenuClick('Layer2')} selected={selectedOpt === 'Layer2'}>
          Layer2
        </StyledNavLink>
        <StyledNavLink to="/wlans/eap/security/server" onClick={() => handleMenuClick('Server')} selected={selectedOpt === 'Server'}>
          AAA Servers
        </StyledNavLink>
      </ButtonContainer>
      <Wrapper>
      <Routes>
        <Route path="layer2" element={<Layer2 />} />
        <Route path="server" element={<Server />} />
      </Routes>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border: solid 1px #000;
  border-radius: 30px;
  border-top-left-radius: 0%;
  position: relative;
  top: 25.5px;
  padding: 2%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: baseline;
  width: 50%;
  position: absolute;
  gap: 1%;
  bottom: ${props => props.selected ? '353' : '397'}px;
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
  font-weight: 500;
  z-index: 99;
  cursor: pointer;
`;

const StyledNavLink = styled(NavLinkBase)`
  background-color: ${props => props.selected ? '#f0f0f0' : '#96BDFF'};
  /* color: ${props => props.selected ? '#fff' : 'black'}; */
`;
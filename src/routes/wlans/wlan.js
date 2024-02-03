import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import PSK from './psk.js';
import EAP from './eap.js';

export default function WLANS() {
  return(
    <>
      <Wrapper>
        <Sidebar>
          <MenuContainer>
            <p className='mainTitle'>WLANS</p>
            <p className='title'>▶ WLANS</p>
            <LinkStyle to="/wlans/psk">
              <p className='detail'>▶ PSK</p>
            </LinkStyle>
            <LinkStyle to="/wlans/eap">
              <p className='detail'>▶ EAP</p>
            </LinkStyle>
          </MenuContainer>
        </Sidebar>
      </Wrapper>
      <Routes>
        <Route path="psk/*" Component={PSK} />
        <Route path="eap/*" Component={EAP} />
      </Routes>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Sidebar = styled.div`
  background-color: #F2F2F2;
  width: 22vw;
  height: 88%;
  position: absolute;
  z-index: -99;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    margin: 5px;
  }

  .mainTitle {
    color: #000;
    font-weight: 700;
    font-size: 180%;
  }

  .title {
    color: #43636E;
    font-weight: 500;
    font-size: 180%;
  }

  .detail {
    color: #99999E;
    font-weight: 500;
    font-size: 160%;
    position: relative;
    left: 25px;
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 0;
  margin: 0;
`;
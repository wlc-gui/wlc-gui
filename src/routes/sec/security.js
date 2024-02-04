import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import AAA from "./aaa";
import EAP from "./eap/eap";

export default function Security () {
  return(
    <>
    <Wrapper>
      <Sidebar>
        <MenuContainer>
          <p className="mainTitle">Security</p>
          <p className="title">▶ Security</p>
          <LinkStyle to="/security/aaa">
            <p className="detail">▶ AAA</p>
          </LinkStyle>
          <LinkStyle to="/security/aaa/authentication">
            <p className="sub-detail">▶ Authentication</p>
          </LinkStyle>
          <LinkStyle to="/security/eap">
            <p className="detail">▶ Local EAP</p>
          </LinkStyle>
          <LinkStyle to="/security/eap/profile">
            <p className="sub-detail">▶ Profile</p>
          </LinkStyle>
          <LinkStyle to="/security/eap/fast">
            <p className="sub-detail">▶ EAP-FAST</p>
          </LinkStyle>
          <LinkStyle to="/security/eap/tls">
            <p className="sub-detail">▶ EAP-TLS</p>
          </LinkStyle>
          <LinkStyle to="/security/eap/peap">
            <p className="sub-detail">▶ PEAP</p>
          </LinkStyle>
        </MenuContainer>
      </Sidebar>
    </Wrapper>
    <Routes>
      <Route path="aaa/*" Component={AAA}/>
      <Route path="eap/*" Component={EAP}/>
    </Routes>
    </>
  );
}

const Wrapper = styled.div`
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

  .sub-detail {
    color: #99999E;
    font-weight: 500;
    font-size: 140%;
    position: relative;
    left: 45px;
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 0;
  margin: 0;
`;
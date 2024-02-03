import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Profile from "./profile";
import FAST from "./fast";
import TLS from "./tls";
import PEAP from "./peap";

export default function EAP () {
  return(
    <>
    <Wrapper></Wrapper>
    <Routes>
      <Route path="profile" Component={Profile}/>
      <Route path="fast" Component={FAST}/>
      <Route path="tls" Component={TLS}/>
      <Route path="peap" Component={PEAP}/>
    </Routes>
    </>
  );
}

const Wrapper = styled.div`
`;
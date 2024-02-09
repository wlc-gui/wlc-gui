import React from "react";
import styled from "styled-components";

export default function Server() {
  return(
    <>
    <TitleContainer>
      <DetailContainer>
        <Title>Select AAA servers below to override use of default servers on this WLAN</Title>
        <Title>Radius Servers</Title>
        <Detail>Radius Server Overwrite interface
          <Checkbox type="checkbox"/>
        </Detail>
      </DetailContainer>
      <Title>Authentication Servers<Divider/></Title>
      <DetailContainer>
        <Detail>Server
          <Input placeholder="IP address"/>
          <Checkbox type="checkbox"/>
        </Detail>
      </DetailContainer>
      <Title>Local EAP Authentication<Divider/></Title>
      <DetailContainer>
        <Detail>Local EAP Authentication<Checkbox type="checkbox"/></Detail>
        <Detail>EAP Profile Name<Input/></Detail>
      </DetailContainer>
    </TitleContainer>
    </>
  );
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: baseline;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;

const Title = styled.div`
  color: #387C94;
  font-size: 120%;
  font-weight: 500;
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #387C94;
  position: relative;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const Detail = styled.div`
  width: 100%;
  color: #000;
  font-size: 100%;
  display: flex;
  align-items: center;
  gap: 5%;
`;

const Checkbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: solid 2px rgb(211, 211, 211);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  background-color: #fff;
  flex-shrink: 0;
  position: absolute;
  left: 40%;
  transition: all ease 0.4s;

  &:checked {
    background-color: #45de45;
  }
`;

const Input = styled.input`
  width: 25%;
  height: 23px;
  border: solid 2px rgb(211, 211, 211);
  border-radius: 10px;
  outline: none;
  background-color: white;
`;
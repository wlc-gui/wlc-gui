import React from "react";
import styled from "styled-components";

export default function PSK () {
  return(
    <>
    <State>WLANs ⭢ Edit 'PSK'</State>
    <Wrapper>
      <TitleContainer>
        <Title>Profile Name</Title>
        <Title>Type</Title>
        <Title>SSID</Title>
        <Title>Status</Title>
        <Title>Security Policies</Title>
      </TitleContainer>
      <DetailContainer>
        <Detail>Internal</Detail>
        <Detail>WLAN</Detail>
        <Detail>Internal</Detail>
      </DetailContainer>
    </Wrapper>
    </>
  );
}

const State = styled.div`
  color: #ACA7A4;
  font-size: 180%;
  font-weight: 700;
  position: relative;
  left: 350px;
  top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5%;

  background-color: #F0F0F0;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border: solid 1px #000;

  width: 50%;
  height: 40%;
  position: relative;
  top: 20vh;
  left: 30%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: baseline;
  flex-direction: column;
  gap: 30px;
  width: 50%;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 50%;
`;

const Title = styled.div`
  color: #000;
  font-size: 120%;
`;

const Detail = styled.div`
  color: #A8A4A5;
  font-size: 120%;
`;
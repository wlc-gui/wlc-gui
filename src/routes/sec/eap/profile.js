import React from "react";
import styled from "styled-components";

export default function Profile () {
  return(
    <>
    <State>Local EAP Profile</State>
    <Wrapper>
      <TitleContainer>
        <Title>Profile Name</Title>
        <Title>EAP-FAST</Title>
        <Title>EAP-TLS</Title>
        <Title>PEAP</Title>
      </TitleContainer>
      <DetailContainer>
        <Input/>
        <Checkbox type="checkbox"/>
        <Checkbox type="checkbox"/>
        <Checkbox type="checkbox"/>
      </DetailContainer>
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

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  height: 30%;
  border: 1px solid black;
  border-radius: 30px;
  background-color: #f0f0f0;
  position: relative;
  top: 100px;
  left: 30%;
  padding: 5%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: baseline;
  flex-direction: column;
  width: 50%;
  gap: 33px;
`;

const Title = styled.div`
  color: black;
  font-size: 120%;
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: baseline;
  flex-direction: column;
  width: 50%;
  gap: 30px;
`;

const Input = styled.input`
  width: 50%;
  height: 20px;
  border: 2px solid rgb(211, 211, 211);
  border-radius: 10px;
  outline: none;
  background-color: white;
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
  transition: all ease 0.4s;

  &:checked {
    background-color: #45de45;
  }
`;
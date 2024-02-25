import React from "react";
import styled from "styled-components";

export default function FAST () {
  return(
    <>
    <State>EAP-FAST Method Parameters</State>
    <Wrapper>
      <TitleContainer>
        <Title>Server Key</Title>
        <Title>Time to live for the PAC</Title>
        <Title>Anonymous Provision</Title>
      </TitleContainer>
      <DetailContainer>
        <Input/>
        <Input/>
        <Checkbox type="checkbox" />
        <SaveButton>Save</SaveButton>
      </DetailContainer>
    </Wrapper>
    </>
  );
}

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

const State = styled.div`
  color: #aca7a4;
  font-size: 1.8rem;
  font-weight: 700;
  position: relative;
  left: 350px;
  top: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: baseline;
  flex-direction: column;
  width: 50%;
  gap: 33px;
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: baseline;
  flex-direction: column;
  width: 50%;
  gap: 30px;
`;

const Title = styled.div`
  color: black;
  font-size: 120%;
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

const SaveButton = styled.button`
  width: 55px;
  height: 30px;
  background-color: #3fb0d9;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 1%;
  margin-left: 90%;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color: #3fb0d9;
  }
`;
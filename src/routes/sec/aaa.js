import React from "react";
import styled from "styled-components";

export default function AAA () {
  return(
    <>
    <State>Radius Authentication Servers ⭢ Edit</State>
    <Wrapper>
      <TitleContainer>
        <Title>Server Address</Title>
        <Title>Shared Secret Format</Title>
        <Title>Shared Secret</Title>
        <Title>Port Number</Title>
        <Title>Server Status</Title>
      </TitleContainer>
      <DetailContainer>
        <Input/>
        <Button>ASCII</Button>
        <Input/>
        <Input/>
        <Checkbox type="checkbox" />
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

const Button = styled.button`
  border: solid 1px black;
  background: transition;
  color: black;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  width: 20%;
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
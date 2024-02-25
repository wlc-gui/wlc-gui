import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Layer2Policy } from "../../../store";

export default function General() {
  const selectedLayer2Policy = useRecoilState(Layer2Policy);

  return (
    <Wrapper>
      <Container>
        <Title>Profile Name</Title>
        <Input/>
        <Check>save</Check>
      </Container>
      <Container>
        <Title>Type</Title>
        <Detail>Wireless LAN</Detail>
      </Container>
      <Container>
        <Title>SSID</Title>
        <Input/>
        <Check>save</Check>
      </Container>
      <Container>
        <Title>Status</Title>
        <Checkbox type="checkbox"/>
        <Detail>Enabled</Detail>
      </Container>
      <Container>
        <Title>Security Policies</Title>
        <Detail>{selectedLayer2Policy}</Detail>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const Title = styled.div`
  color: black;
  font-size: 120%;
`;

const Detail = styled.div`
  color: #a8a4a5;
  font-size: 120%;
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
  margin-right: 10px;
  flex-shrink: 0;
  transition: all ease 0.4s;

  &:checked {
    background-color: #45de45;
  }
`;

const Input = styled.input`
  width: 30%;
  height: 23px;
  border: solid 2px rgb(211, 211, 211);
  border-radius: 10px;  
  outline: none;
  background-color: white;
`;

const Check = styled.button`
  padding: 5px;
  border: solid 2px rgb(211, 211, 211);
  border-radius: 10px;
  outline: none;
  background-color: white;
  cursor: pointer;
  transition: all ease 0.3s;
  position: relative;
  right: 40px;

  &:hover {
    background-color: #ccc;
  }
`;
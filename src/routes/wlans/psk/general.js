import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { PolicyState } from "../../../store";

export default function General() {
  const selectedPolicy = useRecoilState(PolicyState);

  return (
    <>
    <TitleContainer>
      <Title>Profile Name</Title>
      <Title>Type</Title>
      <Title>SSID</Title>
      <Title>Status</Title>
      <Title>Security Policies</Title>
    </TitleContainer>
    <DetailContainer>
      <Detail>Internal</Detail>
      <Detail>Wireless LAN</Detail>
      <Detail>Internal</Detail>
      <Detail>
        <Checkbox type="checkbox" defaultChecked />
        <CheckboxLabel>Enabled</CheckboxLabel>
      </Detail>
      <Detail>{selectedPolicy}</Detail>
    </DetailContainer>
    </>
  );
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: baseline;
  flex-direction: column;
  gap: 50px;
  width: 50%;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 50%;
`;

const Title = styled.div`
  color: #000;
  font-size: 120%;
`;

const Detail = styled.div`
  color: #a8a4a5;
  font-size: 120%;
  display: flex;
  align-items: center;
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

const CheckboxLabel = styled.span`
  font-size: 100%;
  color: #a8a4a5;
`;

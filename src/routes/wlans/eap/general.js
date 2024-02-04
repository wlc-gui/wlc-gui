import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Route, Routes } from 'react-router-dom';

export default function General() {
  return (
    <>
    <TitleContainer>
      <Title>Profile Name</Title>
      <Detail><Input/><Check>check</Check></Detail>
      <Title>Type</Title>
      <Title>SSID</Title>
      <Title>Status</Title>
      <Title>Security Policies</Title>
    </TitleContainer>
    </>
  );
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: baseline;
  flex-direction: column;
  gap: 50px;
  width: 100%;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Title = styled.div`
  color: #000;
  font-size: 120%;
`;

const Detail = styled.div`
  width: 100%;
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

const Input = styled.input`
  width: 25%;
  height: 23px;
  border: solid 2px rgb(211, 211, 211);
  border-radius: 10px;
  outline: none;
  background-color: white;
  margin-left: 50px;
`;

const Check = styled.button`
  padding: 5px;
  border: solid 2px rgb(211, 211, 211);
  border-radius: 10px;
  outline: none;
  background-color: white;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background-color: #ccc;
  }
`;
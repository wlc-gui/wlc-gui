import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { PolicyState } from "../../../store";

export default function Security() {
  const ciphers = ["AES", "TKIP", "CCMP256", "GCMP128", "GCMP256"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChangeIndex = (index) => {
    setSelectedIndex(index);
  };

  const [selectedPolicy, setSelectedPolicy] = useRecoilState(PolicyState);

  const handleChangePolicy = (e) => {
    setSelectedPolicy(e.target.value);
  }

  const [inputPSK, setInputPSK] = useState("");
  const handleInputPSK = (e) => {
    setInputPSK(e.target.value);
  };
  
  const savePSK = () => {
    fetch('security', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ psk: inputPSK }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      // Handle success response
      return response.json(); // 예를 들어, 서버로부터 JSON 형식의 응답을 받을 경우 처리
    })
    .then(data => {
      console.log('Response data:', data);
      // Handle response data
    })
    .catch(error => {
      console.error('Error during fetch operation:', error.message);
      // Handle error
    });
  };
  

  return(
    <>
      <TitleContainer>
        <Title>Layer 2<Divider/></Title>
        <DetailContainer>
          <Detail>Layer2 Security
            <Select value={selectedPolicy} onChange={handleChangePolicy}>
              <option value="WPA + WPA2">WPA + WPA2</option>
              <option value="WPA2-Personal">WPA2-Personal</option>
              <option value="WPA2-Enterprise">WPA2-Enterprise</option>
              <option value="WPA3">WPA3</option>
            </Select>
          </Detail>
          <Detail>Mac Filtering<Checkbox type="checkbox"/></Detail>
        </DetailContainer>
        <Title>WPA + WPA2 Parameters<Divider/></Title>
        <DetailContainer>
          <Detail>WPA Policy<Checkbox type="checkbox"/></Detail>
          <Detail>WPA2 Policy<Checkbox type="checkbox"/></Detail>
          <Detail>Encryption Cipher<Button onClick={() => handleChangeIndex((selectedIndex + 1) % ciphers.length)}>{ciphers[selectedIndex]}</Button></Detail>
        </DetailContainer>  
        <Title>Authentication Key Management<Divider/></Title>
        <DetailContainer>
          <Detail>PSK Format<Button>ASCII</Button></Detail>
          <Detail>PSK<Input value={inputPSK} onChange={handleInputPSK}/><Save onClick={savePSK}>save</Save></Detail>
          <Detail>PSK-SHA2<Checkbox type="checkbox"/></Detail>
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
  gap: 10px;
`;

const Title = styled.div`
  color: #387C94;
  font-size: 120%;
  font-weight: 700;
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
  left: 30%;
  transition: all ease 0.4s;

  &:checked {
    background-color: #45de45;
  }
`;

const Input = styled.input`
  width: 25%;
  height: 20px;
  border: solid 2px rgb(211, 211, 211);
  border-radius: 10px;
  outline: none;
  background-color: white;
  margin-left: 10%;
`;

const Save = styled.button`
  padding: 5px;
  border: solid 2px rgb(211, 211, 211);
  border-radius: 10px;
  outline: none;
  background-color: white;
  margin-left: 20px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background-color: #ccc;
  }
`;

const Select = styled.select`
  width: 20%;
  border: 2px solid lightgrey;
  outline: none;
  box-shadow: 0 0 20px -18px;
  border-radius: 12px;
  margin-left: 30px;
  padding: 5px;
`;

const Button = styled.button`
  border: solid 1px #000;
  background-color: transparent;
  color: #000;
  padding: 5px;
  border-radius: 5px;
  margin-left: 30px;
  cursor: pointer;
`;

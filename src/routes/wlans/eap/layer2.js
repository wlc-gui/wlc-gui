import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Layer2Policy } from "../../../store";

export default function Layer2() {
  const [selectedLayer2Policy, setSelectedLayer2Policy] = useRecoilState(Layer2Policy);

  const handleChangeLayer2Policy = (e) => {
    setSelectedLayer2Policy(e.target.value);
  }

  return (
    <>
    <TitleContainer>
      <DetailContainer>
        <Detail>Layer2 Security
        <Select value={selectedLayer2Policy} onChange={handleChangeLayer2Policy}>
          <option value="WPA">WPA</option>
          <option value="WPA2">WPA2</option>
          <option value="WPA2-Enterprise">WPA2-Enterprise</option>
          <option value="WPA3">WPA3</option>
        </Select>
        </Detail>
        <Detail>Mac Filtering
        <Checkbox type="checkbox"/> </Detail>
      </DetailContainer>
      <Title>WPA Parameters<Divider/></Title>
      <DetailContainer>
        <Detail>WPA Policy<Checkbox type="checkbox"/></Detail>
        <Detail>WPA Policy-AES<Checkbox type="checkbox"/></Detail>
      </DetailContainer>
      <Title>Authentication Key Management<Divider/></Title>
      <DetailContainer>
        <Detail>802.1x<Checkbox type="checkbox"/></Detail>
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

const Select = styled.select`
  width: 20%;
  border: 2px solid lightgrey;
  outline: none;
  box-shadow: 0 0 20px -18px;
  border-radius: 12px;
  margin-left: 30px;
  padding: 5px;
`;

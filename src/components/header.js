import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Header() {
  const [selectedOption, setSelectedOption] = useState('WLANS');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  }

  return (
    <Container>
      <HeaderBox>
        <Options>
          <LinkStyle to="/wlans" onClick={() => handleOptionClick('WLANS')} className={selectedOption === 'WLANS' ? 'active' : ''}>
            <p>WLANS</p>
          </LinkStyle>
          <LinkStyle to="/security" onClick={() => handleOptionClick('SECURITY')} className={selectedOption === 'SECURITY' ? 'active' : ''}>
            <p>SECURITY</p>
          </LinkStyle>
        </Options>
      </HeaderBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const HeaderBox = styled.div`
  width: 100%;
  height: 12%;
  background-color: #4984A4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 200px;
  position: relative;
  border-bottom: solid 10px #000;

  p {
    color: white;
    font-size: 180%;
    font-weight: 700;
    margin-bottom: 15px;
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 0;
  margin-bottom: 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    transition: all 0.3 ease;
    z-index: 999;
  }

  &.active::after {
    border-bottom: solid 10px #F0931C; 
  }
`;

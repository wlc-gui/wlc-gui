import React from "react";
import styled from "styled-components";

export default function AAA () {
  return(
    <>
    <State>Radius Authentication Servers ⭢ Edit</State>
    <Wrapper>
    
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
  top: 20%;
`;

const State = styled.div`
  color: #aca7a4;
  font-size: 1.8rem;
  font-weight: 700;
  position: relative;
  left: 350px;
  top: 20px;
`;
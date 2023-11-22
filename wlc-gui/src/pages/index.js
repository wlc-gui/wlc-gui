import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const menus = [
  {name: 'WLANS', path: 'wlans'},
  {name: 'SECURITY', path: 'security'},
];

export default function Index() {
  const [selectedMenu, setSelectedMenu] = useState('false');

  return (
    <Container>
      <Header>
        <UpBar>
          <Menu>
            { menus.map(({name, path}, index) => (
              <Link key={index} href={path}>
                <MenuItem>{name}</MenuItem>
              </Link>
            ))}
          </Menu>
        </UpBar>
        
        <UnderBar></UnderBar>
      </Header>
      <Content>
        <SideBar>
        </SideBar>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const Header = styled.div`
  width: 100%;
  height: 121px;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
`;

const UpBar = styled.div`
  width: 100%;
  height: 106px;
  flex-shrink: 0;
  background: #4984A4;
`;

const UnderBar = styled.div`
  width: 100%;
  height: 15px;
  flex-shrink: 0;
  background: #000;
`;

const Content = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  width: 274px;
  height: 701px;
  flex-shrink: 0;
  background: #F2F2F2;
`;

const Menu = styled.div`
  width: 323px;
  height: 36px;
  flex-shrink: 0;
  gap: 59px;
`;

const MenuItem = styled.div`
  color: #FFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
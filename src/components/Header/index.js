import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 3vh;
  display: block;
  width: 100%;
  background-color: #333333;
  padding: 14px;
`;

const Title = styled.h3`
  color: #f2f2f2;
`;

function Header(){
  return(
    <HeaderContainer><Title>Editor</Title></HeaderContainer>
  );
}

export default Header;

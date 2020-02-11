import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: inherit;
`;

const LinksGroupContainer = styled.div`
  color: inherit;
`;

const LinksGroupTitle = styled.h4`
  color: inherit;
`;

const LinksGroupItem = styled.div`
  color: inherit;
`;

function Sidebar(){
  return(
    <div>
      <Container>
        <LinksGroupContainer>
          <LinksGroupTitle>Worksheets</LinksGroupTitle>
          <LinksGroupItem></LinksGroupItem>
        </LinksGroupContainer>
      </Container>
    </div>
  )
}

export default Sidebar;

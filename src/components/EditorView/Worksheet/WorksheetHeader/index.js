import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 20px;
`;

const WorksheetTitle = styled.h2``;

function Worksheet(){
  return(
    <Container>
      <WorksheetTitle>Sales Units</WorksheetTitle>
    </Container>
  )
}

export default Worksheet;

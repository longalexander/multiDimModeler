import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  margin: 0px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  display:flex;
`;

const TitleContainer = styled.div`
`;

const Title = styled.h6`
  padding: 8px;
  text-align: right;
  color: #828282;
  width: 50px;
`;

function Mark(){
  return(
    <Container>
      <TitleContainer><Title>Mark</Title></TitleContainer>
    </Container>
  );
}

export default Mark;

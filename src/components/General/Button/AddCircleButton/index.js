import React from 'react';
import styled from 'styled-components'

/*
* Props:
* - clickFn: The function that runs when the AddCircleButton is clicked.
*/

const Container = styled.div`
  background-color: 'black';
  align-items: center;
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
`;

function AddCircleButton(props){
  return(
    <Container>
      <button onClick={props.clickFn}>Add</button>
    </Container>
  );
}

export default AddCircleButton;

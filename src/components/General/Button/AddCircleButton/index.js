import React from 'react';
import styled from 'styled-components'

/*
* Props:
* - clickFn: The function that runs when the AddCircleButton is clicked.
*/

const Container = styled.div`
  background-color: 'black';
  width: 20px;
  height: 20px;

`;

function AddCircleButton(props){
  return(
    <Container>
      <button onClick={props.clickFn}>Add</button>
    </Container>
  );
}

export default AddCircleButton;

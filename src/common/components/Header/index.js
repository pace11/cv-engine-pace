import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background-color: red;
`

function StyledWrapper() {
  return <Wrapper>Header Atas</Wrapper>
}

export default StyledWrapper
import React from 'react'
import styled from 'styled-components'
import theme from '../../common/theme'

const WrapperHome = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${theme.colors.pink};
`

function StyledHome() {
  return (
    <WrapperHome>
      <p>Home</p>
    </WrapperHome>
  )
}

export default StyledHome

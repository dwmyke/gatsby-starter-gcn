import React from 'react'
import styled from 'styled-components'

const Sub = styled.h4`
  font-size: ${props => (props.small ? '1em' : '2em')};
  font-weight: 400;
  text-align: center;
  margin: 0 0 3rem 0;
  margin: ${props => (props.small ? '1rem 0 4rem 0' : '0 0 3rem 0')};
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const PageSub = props => {
  return <Sub small={props.small}>{props.children}</Sub>
}

export default PageSub

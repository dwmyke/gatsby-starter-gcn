import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import PageSub from '../components/PageSub'
import PageTitle from '../components/PageTitle';

const Wrapper = styled.div`
  padding: 1em;
  background: no-repeat top center url("/imgages/herobkg.jpg"); 
  `
  
  
const Banner = () => (
  <Wrapper>
    <PageTitle>Mikel-Jon (Mike) West</PageTitle>
      <PageSub>Writer/Director • Video Editor • Visual Designer • Technical Developer</PageSub>
      <Container><div style={{textAlign: `center`, position: `relative`, paddingBottom: `56.25%`, height: `0`, overflow: `hidden`, maxWidth: `100%`}}> 
      <iframe src='https://www.youtube.com/embed/Md6fHL6lxYk' frameborder='0' allowfullscreen style={{position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%`}}></iframe>
      </div>
      </Container>
  </Wrapper>
)

export default Banner     

import React from 'react'
import styled from 'styled-components'
import herobkg from '../images/herobkg.jpg'
import Container from '../components/Container'
import BannerSub from '../components/BannerSub'
import PageTitle from '../components/PageTitle';

const Wrapper = styled.div`
  padding: 1em;
  color: white;
  background-image: url(${herobkg});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  `
  
  
const Banner = () => (
  <Wrapper>
    <PageTitle>Mikel-Jon (Mike) West</PageTitle>
      <BannerSub><a href="https://mikewest.pro/writer-director">Writer/Director</a> • <a href="https://mikewest.pro/video-editor">Video Editor</a> • <a href="https://mikewest.pro/visual-designer">Visual Designer</a> • <a href="https://mikewest.pro/technical-developer">Technical Developer</a></BannerSub>
      <Container><div style={{textAlign: `center`, position: `relative`, paddingBottom: `56.25%`, height: `0`, overflow: `hidden`, maxWidth: `100%`}}> 
      <iframe src='https://player.vimeo.com/video/330364561' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen style={{position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%`}}></iframe>
      </div>
      </Container>
  </Wrapper>
)

export default Banner     

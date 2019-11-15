import React from 'react';

import { Container } from './styles';

import ball from '../../assets/ball.png'
import ballCloud from '../../assets/ball_cloud.png'


export default function Ball() {
  return (
    <Container>
      <div className="ball">
        <img src={ball} alt=""/>
      </div>
      <div className="cloud">
        <img src={ballCloud} alt=""/>
      </div>
    </Container>
  );
}

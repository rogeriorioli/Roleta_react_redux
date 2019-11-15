import React from 'react';

import { Container } from './styles';

import letter from '../../assets/box_letter.png'
import CloudF from '../../assets/box_letter_clloud-f.png'
import CloudB from '../../assets/box_letter_clloud-b.png'

export default function Letter() {
  return (
    <Container>
      <div className="cloud-f">
        <img src={CloudF} alt=""/>
      </div>
      <div className="box_letter">
        <img src={letter} alt=""/>
      </div>
      <div className="cloud-b">
        <img src={CloudB} alt=""/>
      </div>
    </Container>
  );
}

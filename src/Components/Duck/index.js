import React from 'react';

import { Container } from './styles';

import duck from '../../assets/duck.png'
import duckCloudF from '../../assets/cloud_duck_front.png'
import duckCloudB from '../../assets/cloud_duck_back.png'

export default function Duck() {
  return (
    <Container>
        <div className="cloud-f">
            <img src={duckCloudF} alt=""/>
        </div>
        <div className="duck">
          <img src={duck} alt=""/>
        </div>
        <div className="cloud-b">
           <img src={duckCloudB} alt=""/>
        </div>
    </Container>
  );
}

import React from 'react';
import {CloseCircle} from 'styled-icons/remix-fill/CloseCircle'

import { Container } from './styles';

export default function Close() {

    const  handleClose =() => window.top.close();
  return (
    <Container>
        <button onClick={handleClose}>
            <CloseCircle size={48}/>
        </button>
    </Container>
  );
}

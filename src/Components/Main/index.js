import React, {useEffect} from 'react';

import { Provider } from 'react-redux'
import { Container } from './styles';
import Roleta from '../Roleta';
import Boxtext from '../Box_text'
import store from '../../store'
import Animate ,{FadeIn , Pulse} from 'animate-css-styled-components'
import Close from '../Close';
 

export default function Main() {

  useEffect(() => {
    const id = '11353' 
    if(window.location.hostname === "localhost") {
        return console.log('rodando local')
    }
    window.onload = () => window.top.spl.view(id);
  })
  return (
    <Animate 
      Animation={[FadeIn, Pulse]}
      duration={["0", "1.5s"]}
      delay={["0.5s", "0.5s"]} 
    >
     <Container>
       <Close/>
       <Provider store={store}>
        <Boxtext />
        <Roleta/>
       </Provider>
     </Container> 
    </Animate>
  );
}
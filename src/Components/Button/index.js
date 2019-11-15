
import React from 'react';
import { connect } from 'react-redux'
import { Container } from './styles';

function sendRaio(discount, cuppon, clase, frase, url) {
  return {
    type: 'SEND_RAIO',
    discount,
    cuppon,
    clase,
    frase, 
    url 
  }
}
const randomOfDiscounts = Math.random();
const Discounts = (discounts) => discounts[Math.floor(randomOfDiscounts * discounts.length)]

const Button = ({discounts, dispatch , button}) => (

  <Container>
      {
      <button className={button}
              key={Discounts(discounts).id}
              onClick={() => dispatch(
                             sendRaio(Discounts(discounts).raio , 
                                      Discounts(discounts).cuppon,
                                      Discounts(discounts).clase, 
                                      Discounts(discounts).frase,
                                      Discounts(discounts).url,
                             ))}>
               girar roleta!
      </button>
    }
  </Container>

)
export default connect(state => ({ 
      discounts: state.discounts ,
      cuppon : state.cuppon,
      clase : state.clase,
      frase : state.frase,
      url : state.url
    }))(Button);



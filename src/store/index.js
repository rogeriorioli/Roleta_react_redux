import { createStore } from 'redux';

const roll = (360 * 5);

  const INITIAL_STATE = {
        activeState: 90, 
        cuppon: undefined,
        button : 'show',
        url : '',
        clase:  'cuppon',
        frase : `<p class="firstP">Gire a roleta para ganhar uma 
        surpresa especial!</p>`,
        discounts : [
          {
            id : Math.random(),
            value : '15% de desconto',
            cuppon : '',
              raio: roll + 90,
              clase: 'dashed',
            button : 'hide',
            url : 'http://namu.com.br/aula-kundalini-yoga-video/',
            frase: `<strong>Aproveite 1 aula grátis do curso</strong><p>KUNDALINI YOGA BÁSICO: ALIVIANDO O ESTRESSE E A ANSIEDADE</p>`
          },
          {
            id : Math.random(),
            value : '15% de desconto',
            cuppon : '',
            raio :  roll + 180,
            clase: 'dashed',
            url : 'https://d335luupugsy2.cloudfront.net/cms/files/35296/1551047679manual-da-vida-saudavel.pdf',
            button : 'hide',
            frase: `<strong>Você ganhou um E-book</strong><p> Ebook: Manual da Vida Saudável | O passo a passo para ter uma vida mais equilibrada</p>`,
    
          },
          {
            id : Math.random(),
            value : '2 pares de absorvente de seios ',
            cuppon : '15saudavel',
            raio :  roll + 270,
            clase: 'dashed',
            url : '',
            button : 'hide',
            frase: `<strong>Aqui tem 15% OFF!</strong><p>15% OFF em qualquer curso do Namu</p>`,
          },
          {
            id : Math.random(),
            value : '50% de desconto',
            cuppon : '',
            raio : roll + 360,
            clase: 'dashed',
            button : 'hide',
            url : 'http://namu.com.br/aula-kundalini-yoga-video/',
            frase: `<strong>Aproveite 1 aula grátis do curso</strong><p>KUNDALINI YOGA BÁSICO: ALIVIANDO O ESTRESSE E A ANSIEDADE</p>`
          },
        ]
    }
function reducer(state = INITIAL_STATE, action) {
  console.table(action)
  if(action.type === 'SEND_RAIO') {
    return { 
      ...state ,
      activeState : action.discount, 
      cuppon : action.cuppon, 
      clase : action.clase,
      frase : action.frase,
      button : action.button,
      url : action.url
     }
  }
  return state
}

const store = createStore(reducer);


export default store;
import React from 'react';
import { connect } from 'react-redux'
import useClipboard from "react-use-clipboard";
import { Container } from './styles';
import Button from '../Button';
import TitleBox from '../TitleBox';

const Boxtext = (activeState) => {
  const [isCopied, setCopied] = useClipboard(activeState.cuppon);
  const utms = {
      medium : 'Shopback_roleta',
      Source : `ShopBack_${activeState.cuppon}`
  }
  const handleUtm = () => {
    const url = `${activeState.url}?utm_medium=${utms.medium}&utm_source${utms.Source}`
    window.top.location.href = url
  }

  return (
    <>
    <Container>
      <TitleBox />
      <div className="box-text">
          <div className={activeState.cuppon === '' ? 'text-fade' : 'text'}>
              <div dangerouslySetInnerHTML={{ __html: activeState.frase}} />
          </div>
          {activeState.cuppon === '' || activeState.cuppon === undefined ?
          <>
            <button onClick={handleUtm} 
                    className={activeState.cuppon === '' ? 'show' : 'hide'}>
                      Contiunar no site
            </button> 
            <Button button={activeState.cuppon === '' ? 'hide' : 'show'}/>  
          </>
          : 
          <>

          <span className={`cuppon ${activeState.clase}`} onClick={setCopied}>
              {isCopied ? `cuppon ${activeState.cuppon} copiado com sucesso` : `Clique aqui para copiar o cuppon ${activeState.cuppon}` }
          </span>
          
          <button onClick={handleUtm} className={isCopied ? 'show' : `hide ${activeState.cuppon}`}>Continuar no site</button> 
          </>
         }
      </div>
    </Container>
    </>
  );
}

export default connect(state => ({cuppon: state.cuppon, clase: state.clase, frase : state.frase , url : state.url }))(Boxtext);

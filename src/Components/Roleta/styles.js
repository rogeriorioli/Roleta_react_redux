import styled from 'styled-components';
export const Container = styled.div`
    width : 500px;
    height : 500px;
    background: url('https://static.shopback.net/shopconvert/uploads/imagens/namu/2019/10/roleta.png');
    transform:  rotate(${props =>  props.raio}deg) !important;
    transition: all 2s ;
    z-index: 7;
    position: absolute;
    right: 85px;
    top: 10px;
    background-size: 100%;

    .box-wrapper {
      width: 613px;
      }
      .box-discount {
        width: 305px;
        height : 305px;
        display : inline-block;

      }
`;
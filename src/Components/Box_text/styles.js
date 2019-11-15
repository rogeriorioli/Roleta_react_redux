import styled from 'styled-components';


export const Container = styled.div`
  width: 600px;
    height: auto;
    padding: 20px;
    background: #fff;
    border-radius: 20px;
    z-index: 999;
    position: absolute;
    left: 0;
    background: url(https://static.shopback.net/shopconvert/uploads/imagens/namu/2019/10/box-text.png);
    background-size: 100%;
    background-repeat: no-repeat;

  .box-text {
    padding: 4px 45px;
    position: relative;
    top: -107px;
    strong {
    font-style:italic;
    font-size: 30px;
    line-height: 1.2;
    color : #000;
    letter-spacing : 3px;
      span {
        color : #f5b9ae;
      }
    }
    p{
      font-size: 15px;
    font-style: italic;
    width: 90%;
    padding: 15PX 0;
      &.firstP {
        font-size : 24px;
        font-style : normal;
        width: 81%;

      }
    }  
    .text {
      font-size : 12px;
      text-transform : none;
      transition : all 0.5s;
      color : #000;
      opacity : 1;
      font-family : sans-serif;
      &-fade{
          animation-duration: 10s;
          animation-name: fadein;
        }

        @keyframes fadein {
          from {
            display: none;
            opacity : 0;
          }
          to {
           opacity : 1;
           display : block;
          }
        }
       &-helper {
          color : #000;
          opacity : 1;
      }
      &-success {
        color : green;
        opacity : 1;
      }
    } 
  }
    .cuppon {
        padding : 10px; 
        color : #48d1d2;
        font-family: sans-serif;
        text-align: center;
        text-transform : uppercase;
        margin: 20px auto;
        width: 64%;
        border :  1px dashed transparent; 
        transition : border 0.5s;
        opacity : 0;
        transition : all 0.5s;
        &.dashed {
          border: 1px dashed #48d1d2;
          z-index: 99999;
          cursor: copy;
          opacity: 1;
          font-weight: 800;
          margin: 5px 0;
          display: block;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
      }
    }
    button {
        padding : 15px;
        text-align :center;
        font-size : 20px;
        width : 300px;
        border : 0;
        margin-top : 10px;
        border-radius: 4px;
        background-color: #48d1d1;
        color : #fff;
        cursor : pointer;
        opacity: 1;
        &.hide {
          display : none;
        }
      
    }   
`;

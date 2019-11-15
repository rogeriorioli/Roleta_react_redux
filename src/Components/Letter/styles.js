import styled from 'styled-components';

export const Container = styled.div`
    position : absolute;
    z-index : 999999;
    bottom : -10px;
    right : 290px;
    .box_letter {
      z-index: 4;
      animation: letter infinite 1s;
      transition : animation 10s ease-in-out;
      @keyframes letter {
      0% {
        transform: translate(0px, 0px);
      }
      50% {
        transform: translate(0px, 0.5px);
      }
      100% {
        transform: translate(0px, 0px);
      }
    }
    }
    .cloud-f {
      position : absolute;
      z-index : 8;
      bottom :0;
      left: -170px;
      animation: cloudf infinite 1s;
      transition : animation 10s ease-in-out;
      @keyframes cloudf {
      0% {
        transform: translate(0px, 0px);
      }
      50% {
        transform: translate(2px, 0px);
      }
      100% {
        transform: translate(0px, 0px);
      }
    }
    }
    .cloud-b {
      position : absolute;
      z-index : -2;
      top : 40px;
      left : 50px;
      animation: cloudb infinite 1s;
      transition : animation 10s ease-in-out;
      @keyframes cloudb {
      0% {
        transform: translate(0px, 0px);
      }
      50% {
        transform: translate(-2px, 0.5px);
      }
      100% {
        transform: translate(0px, 0px);
      }
    }
    }
`;

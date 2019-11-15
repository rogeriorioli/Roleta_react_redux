import styled from 'styled-components';

export const Container = styled.div`
    position : absolute;
    z-index : 99999;
    left : -90px;
    .ball {
      position : absolute;
      top : 0;
      animation: flying2 infinite 1s;
      transition : animation 20s ease-in-out;
      @keyframes flying2 {
      0% {
        transform: translate(0px, 0px);
      }
      50% {
        transform: translate(0px, 5px);
      }
      100% {
        transform: translate(0px, 0px);
      }
    }
    }
    .cloud {
      position : absolute;
      top:  80px;
      left: -100px;
      animation: flying infinite 1s;
      transition : animation 50s ease-in-out;
      @keyframes flying {
      0% {
        transform: translate(0px, 0px);
      }
      50% {
        transform: translate(3px, 0);
      }
      100% {
        transform: translate(0px, 0px);
      }
    }
    }
`;

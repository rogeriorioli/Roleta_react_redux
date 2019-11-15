import styled from 'styled-components';

export const Container = styled.div`
  position : absolute;
  z-index : 999999;
  right : 300px;
  top: -30px;
  .duck {
    z-index: 4;
      animation: duck infinite 1s;
      transition : animation 10s ease-in-out;
      @keyframes duck {
      0% {
        transform: translate(0px, 0px);
      }
      50% {
        transform: translate(0px, 1px);
      }
      100% {
        transform: translate(0px, 0px);
      }
    }
  }
  .cloud-f {
      position : absolute;
      z-index : 8;
      bottom :31px;
      right:-48px;
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
      top: 31px;
      left: -88px;
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

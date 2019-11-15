import styled from 'styled-components';

export const Container = styled.div`
      position : absolute;
      height : 444px;
      width : 216px;
      z-index : 99999999999;
      right : -150px;
      top : 120px;
      animation: mother infinite 1s;
      transition : animation 20s ease-in-out;
      @keyframes mother {
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
`;

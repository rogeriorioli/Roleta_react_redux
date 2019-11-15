import styled from 'styled-components';

export const Container = styled.div`
      width : 100%;
      display : block;
      button {
        padding : 15px;
        text-align :center;
        font-size : 20px;
        width : 300px;
        border : 0;
        margin-top : 30px;
        border-radius: 4px;
        background-color: #48d1d1;
        color : #fff;
        cursor : pointer;
        &.hide {
          display : none;
        }
      }
      
`;


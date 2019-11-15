import styled from 'styled-components';

export const Container = styled.div`
    position : absolute;
    top : 0;
    right : 0;
    z-index: 999999999;
    button {
        background : transparent;
        color : #48d1d1;
        border : none;
        &:focus {
            outline : none;
        }

    }

`;

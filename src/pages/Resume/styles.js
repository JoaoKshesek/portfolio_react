import styled from 'styled-components';

export const Container = styled.section`
    > hr {
            background: ${({ theme }) => theme.COLORS.GRADIENT};
            height: 1px; 
            width: 100%;
            border: none;
        }
 `;

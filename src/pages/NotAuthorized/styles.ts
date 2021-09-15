import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: ${theme.spacings.large};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 90vh;
  `}
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.orange};
    margin-bottom: ${theme.spacings.large};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weight.bold};
  `}
`;

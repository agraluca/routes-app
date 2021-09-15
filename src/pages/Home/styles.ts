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

export const Button = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};
    margin-bottom: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    border: 0.2rem solid ${theme.colors.black};
    transition: all 0.3s ease-in;

    &:hover {
      background-color: transparent;
      color: ${theme.colors.black};
      border: 0.2rem solid ${theme.colors.black};
    }
  `}
`;

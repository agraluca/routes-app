import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small};
    background: ${theme.colors.black};

    .menu__logo {
      text-decoration: none;
    }
  `}
`;

export const Logo = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    transition: all 0.3s ease-in;

    &:hover {
      color: ${theme.colors.orange};
    }
  `}
`;

export const Link = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    border: none;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.orange};
    }
  `}
`;

export const MenuGroup = styled.nav`
  ${({ theme }) => css`
    display: flex;

    a {
      color: ${theme.colors.white};
      text-decoration: none;
      font-size: ${theme.font.sizes.medium};
      margin-right: ${theme.spacings.medium};
      position: relative;

      &:hover {
        &::after {
          content: "";
          position: absolute;
          display: block;
          height: 0.3rem;
          background-color: ${theme.colors.white};
          animation: hoverAnimation 0.2s forwards;
        }
      }
    }
    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  `}
`;

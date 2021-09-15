import * as S from "./styles";

import { Link } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { isLoggedIn } from "utils/auth";

export default function Menu() {
  const { logOut } = useAuth();
  return (
    <S.Wrapper>
      <Link to="/" className="menu__logo">
        <S.Logo>LOGO</S.Logo>
      </Link>
      <S.MenuGroup>
        <Link to="/">Home</Link>
        {isLoggedIn() && <S.Link onClick={() => logOut()}>Log out</S.Link>}
      </S.MenuGroup>
    </S.Wrapper>
  );
}

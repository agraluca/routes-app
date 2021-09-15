import { useAuth } from "hooks/useAuth";
import { useHistory } from "react-router-dom";

import * as paths from "routes/paths";
import { permissionTypes } from "utils/permissions";
import * as S from "./styles";

export default function Home() {
  const { logIn, handleSetUserCredentials, userCredentials } = useAuth();
  const { push } = useHistory();

  const userAdmin = {
    token: "adminToken",
    username: "Admin",
    profile: ["HOME", "ADMIN"],
  };

  const userNormal = {
    token: "adminToken",
    username: "Admin",
    profile: ["HOME", "NORMAL"],
  };

  const logAsAdmin = () => {
    handleSetUserCredentials(userAdmin);
    logIn(userAdmin.token);
  };
  const logAsNormalUser = () => {
    handleSetUserCredentials(userNormal);
    logIn(userNormal.token);
  };

  return (
    <S.Wrapper>
      <S.Heading>Hello, this is the home page.</S.Heading>
      {userCredentials?.profile.includes(permissionTypes.ADMIN) ? (
        <S.Button onClick={logAsNormalUser}>Become a Normal user</S.Button>
      ) : (
        <S.Button onClick={logAsAdmin}>Become Admin</S.Button>
      )}
      {userCredentials?.profile.includes(permissionTypes.ADMIN) && (
        <S.Button onClick={() => push(paths.admin)}>
          Go to admin&apos;s page
        </S.Button>
      )}
    </S.Wrapper>
  );
}

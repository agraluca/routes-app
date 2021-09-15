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

  const logAsAdmin = () => {
    handleSetUserCredentials(userAdmin);
    logIn(userAdmin.token);
  };
  return (
    <S.Wrapper>
      <S.Heading>Hello, this is the home page.</S.Heading>
      <S.Button onClick={logAsAdmin}>Become Admin</S.Button>
      {userCredentials?.profile.includes(permissionTypes.ADMIN) && (
        <S.Button onClick={() => push(paths.admin)}>
          Go to admin&apos;s page
        </S.Button>
      )}
    </S.Wrapper>
  );
}

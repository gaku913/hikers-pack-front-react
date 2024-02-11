import { AuthInfo } from "@/authenticate/authInfoInitial";
import { useAuthContext } from "@/authenticate/useAuthContext";
import { userSchemaType } from "@/validations/userSchema";
import axios from "axios";
import { useMutation } from "react-query";

/** ユーザーの操作 */
export default function useUser() {
  // Auth Hook
  const { authInfo, setAuth, clearAuth } = useAuthContext();

  /** Create: ユーザー登録 */
  const create = useMutation({
    mutationFn: (user: createUserDataProps) => {
      return axios.post("auth", createUserData(user));
    },
    onSuccess: (data) => setAuth(data),
    onError: (error) => console.log("error",error),
  });

  /** Login */

  /** Logout */
  const logout = useMutation({
    mutationFn: () => {
      return axios.delete("auth/sign_out", {
        data: authInfoApi(authInfo)
      })
    },
    onSuccess: () => clearAuth(),
    onError: (error) => console.log("error",error),
  })

  return { create, logout };
}

/** Data Conversion */
type userApiType = {
  name: string
  email: string
  password: string
  password_confirm: string
}

// Create
type createUserDataProps = userSchemaType | userApiType
function createUserData(user: userSchemaType): userApiType;
function createUserData(user: userApiType): userApiType;
function createUserData(user: createUserDataProps): userApiType;
function createUserData(user: createUserDataProps) {
  if ("passwordConfirm" in user) {
    // userSchemaType
    return {
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirm: user.passwordConfirm,
    };
  }
  else {
    // userApiType
    return user
  }
}

// AuthInfo
function authInfoApi(authInfo: AuthInfo) {
  return {
    uid: authInfo.uid,
    client: authInfo.client,
    "access-token": authInfo.accessToken,
  }
}
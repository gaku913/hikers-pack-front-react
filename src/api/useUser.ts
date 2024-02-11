import { AuthInfo } from "@/authenticate/authInfoInitial";
import { useAuthContext } from "@/authenticate/useAuthContext";
import { loginType, userApiType, userFrontType } from "@/types/user";
import axios from "axios";
import { useMutation, useQuery } from "react-query";

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

  /** Show: ユーザーの詳細 */
  const { data: user } = useQuery({
    queryKey: "auth/sessions",
    queryFn: () => axios.get("auth/sessions", {
      headers: {
        uid: authInfo.uid,
        client: authInfo.client,
        "access-token": authInfo.accessToken,
      }
    })
  });

  /** Login */
  const login = useMutation({
    mutationFn: (data: loginType) => {
      return axios.post("auth/sign_in", data)
    },
    onSuccess: (data) => setAuth(data),
    onError: (error) => console.log("error",error),
  })

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

  return {
    user,
    create,
    logout,
    login
  };
}

/** Data Conversion */
// クラスで実装したい

// Create
type createUserDataProps = userFrontType | userApiType
function createUserData(user: userFrontType): userApiType;
function createUserData(user: userApiType): userApiType;
function createUserData(user: createUserDataProps): userApiType;
function createUserData(user: createUserDataProps) {
  if ("passwordConfirm" in user) {
    // userFrontType
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
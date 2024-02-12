import { AuthInfo } from "@/authenticate/authInfoInitial";
import { useAuthContext } from "@/authenticate/useAuthContext";
import { EditType, loginType, UserApiType, UserType } from "@/types/user";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

/** ユーザーの操作 */
export default function useUser() {
  // Router
  const navigate = useNavigate();
  // Auth Hook
  const { authInfo, setAuth, clearAuth } = useAuthContext();
  const headers = {
    uid: authInfo.uid,
    client: authInfo.client,
    "access-token": authInfo.accessToken,
  };

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
    queryKey: ["user"],
    queryFn: () => axios.get("auth/sessions", { headers }),
    onError: (error) => console.log("error",error),
  });

  /** Update: ユーザー情報の更新 */
  const update = useMutation({
    mutationFn: (data: EditType) => axios.patch("auth", data, { headers }),
    onSuccess: () => navigate("/profile"),
    onError: (error) => console.log("error",error),
  });

  /** Destroy: ユーザーの削除 */
  const destroy = useMutation({
    mutationFn: () => {
      return axios.delete("auth", {
        data: authInfoApi(authInfo)
      });
    },
    onSuccess: () => clearAuth(),
    onError: (error) => console.log("error",error),
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
    update,
    destroy,
    logout,
    login
  };
}

/** Data Conversion */
// クラスで実装したい

// Create
type createUserDataProps = UserType | UserApiType
function createUserData(user: UserType): UserApiType;
function createUserData(user: UserApiType): UserApiType;
function createUserData(user: createUserDataProps): UserApiType;
function createUserData(user: createUserDataProps) {
  if ("passwordConfirm" in user) {
    // UserType
    return {
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirm: user.passwordConfirm,
    };
  }
  else {
    // UserApiType
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
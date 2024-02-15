import { AuthInfo } from "@/authenticate/authInfoInitial";
import { useAuthContext } from "@/authenticate/useAuthContext";
import { EditPWType, EditType, loginType, UserApiIF, UserType } from "@/api/types/user";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

/** ユーザーの操作 */
export default function useUser() {
  // Router
  const navigate = useNavigate();
  // Auth Hook
  const {
    authInfo, setAuth, clearAuth, authHeaders: headers
  } = useAuthContext();

  /** Create: ユーザー登録 */
  const create = useMutation({
    mutationFn: (user: UserType) => {
      return axios.post("auth", new UserApiIF(user).toApi());
    },
    onSuccess: (data) => setAuth(data),
    onError: (error) => console.log("error",error),
  });

  /** Show: ユーザーの詳細 */
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => axios.get("auth/sessions", { headers }),
    onError: (error) => console.log("error",error),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    cacheTime: Infinity,
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

  /** Update: パスワードの変更 */
  const updatePW = useMutation({
    mutationFn: (data: EditPWType) => {
      return axios.patch("auth/password",
        new UserApiIF(data).toApi(), { headers });
    },
    onSuccess: () => navigate("/profile/settingsp"),
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
    onError: (error) => console.log("error",error),
    onSettled: () => clearAuth(),
  })

  return {
    user,
    create,
    update,
    destroy,
    updatePW,
    logout,
    login
  };
}

/** Data Conversion */

// AuthInfo
function authInfoApi(authInfo: AuthInfo) {
  return {
    uid: authInfo.uid,
    client: authInfo.client,
    "access-token": authInfo.accessToken,
  }
}
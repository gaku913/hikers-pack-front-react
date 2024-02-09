// 認証情報の型
export type AuthInfo = {
  uid: string
  client: string
  accessToken: string
};

// 認証情報の初期値
export const authInfoInitial = {
  uid: "",
  client: "",
  accessToken: ""
};
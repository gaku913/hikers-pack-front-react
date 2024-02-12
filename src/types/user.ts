import { Merge } from "@/lib/mergeTypes";
import { filterUndefinedProperties } from "@/lib/utils";

/**
 * User Type
 */
export type UserType = {
  name: string
  email: string
  password: string
  passwordConfirm: string
};
export type UserApiType = {
  name: string
  email: string
  password: string
  password_confirmation: string
};

/**
 * 派生 Type
 */
export type loginType = Pick<UserType, "email" | "password">;
export type EditType = Pick<UserType, "name">;
export type EditPWType = Pick<UserType, "password" | "passwordConfirm">;


/**
 * Data Conversion
 * パラメータ名の変換（ReactApp ⇔ API）を行う
 */
export class UserApiIF {
  private user: Partial<UserType>
  constructor(arg: Partial<Merge<UserType, UserApiType>>) {
    const { name, email, password } = arg;
    let { passwordConfirm } = arg;

    // API用パラメータ
    if ("password_confirmation" in arg) {
      passwordConfirm = arg["password_confirmation"];
    }

    this.user = { name, email, password, passwordConfirm };
  }

  // React App用のパラメータを返す
  data() {
    return filterUndefinedProperties(this.user)
  }

  // API用のパラメータを返す
  toApi() {
    const {
      name,
      email,
      password,
      passwordConfirm: password_confirmation,
    } = this.user;
    const obj = {
      name,
      email,
      password,
      password_confirmation,
    };
    return filterUndefinedProperties(obj)
  }
}

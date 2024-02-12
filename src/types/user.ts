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
  password_confirm: string
};

/** Data Conversion */

/**
 * 派生 Type
 */
export type loginType = Pick<UserType, "email" | "password">;
export type EditType = Pick<UserType, "name">;

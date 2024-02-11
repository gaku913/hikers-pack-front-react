/**
 * User Type
 */
export type userFrontType = {
  name: string
  email: string
  password: string
  passwordConfirm: string
};
export type userApiType = {
  name: string
  email: string
  password: string
  password_confirm: string
};

/** Data Conversion */

/**
 * Login Type
 */
export type loginType = {
  email: string
  password: string
}
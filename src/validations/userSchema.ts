import { RE_EMAIL, RE_PASSWORD } from "@/lib/regex";
import { castToValOrNull } from "@/lib/zodUtil";
import { z } from "zod";

const userSchema = z.object({
  name: castToValOrNull(z.string()),
  email: castToValOrNull(
    z.string()
    .regex(RE_EMAIL, { message: "不正なメールアドレスです。" })
    ),
  password: castToValOrNull(
    z.string()
    .min(8)
    .regex(RE_PASSWORD, { message: "半角英数字で入力してください。" })
    ),
  passwordConfirm: castToValOrNull(z.string()),
})
.refine(({ password, passwordConfirm }) => password === passwordConfirm, {
  path: ["passwordConfirm"],
  message: "パスワードが一致しません。"
});


export type userSchemaType = z.infer<typeof userSchema>

export { userSchema }
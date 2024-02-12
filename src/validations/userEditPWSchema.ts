import { RE_PASSWORD } from "@/validations/regex";
import { castToValOrNull } from "@/validations/zodUtil";
import { z } from "zod";

export const userEditPWSchema = z.object({
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

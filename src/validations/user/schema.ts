import { RE_EMAIL, RE_PASSWORD } from "@/lib/regex";
import { castToValOrNull } from "@/lib/zodUtil";
import { z } from "zod";
import { userErrorMap } from "./errorMap";

const userSchema = z.object({
  name: castToValOrNull(z.string()),
  email: castToValOrNull(
    z.string({ errorMap: userErrorMap })
    .regex(RE_EMAIL)
    ),
  password: castToValOrNull(
    z.string({ errorMap: userErrorMap })
    .min(8)
    .regex(RE_PASSWORD)
    ),
  passwordConfirm: castToValOrNull(z.string()),
})
.superRefine(({ password, passwordConfirm }, ctx) => {
  if (password !== passwordConfirm) {
    ctx.addIssue({
      path: ["passwordConfirm"],
      code: "custom",
      message: "パスワードが一致しません。"
    });
  }
});

export type userSchemaType = z.infer<typeof userSchema>

export { userSchema }
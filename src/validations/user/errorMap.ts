import * as zod from "zod";
import { globalErrorMap } from "@/validations/globalErrorMap";

const userErrorMap: zod.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {

    case zod.ZodIssueCode.invalid_string:
      if (issue.validation === "regex") {
        if (issue.path[0] === "email") {
          return { message: "不正なメールアドレスです。" }
        }
        if (issue.path[0] === "password") {
          return { message: "半角英数字で入力してください。" }
        }
      }
    }

  // グローバルErrorMapのメッセージを返す
  return { message: globalErrorMap(issue, ctx).message };
}

export { userErrorMap }
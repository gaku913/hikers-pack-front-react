import * as zod from "zod";

// Doc: ZodIssueCode
// https://zod.dev/ERROR_HANDLING?id=zodissuecode

const globalErrorMap: zod.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {

    // 型
    case zod.ZodIssueCode.invalid_type:
      if (issue.received === zod.ZodParsedType.null) {
        return { message: "必須項目です。" };
      }
      else {
        return { message: "不正な値です。" };
      }

    // Minimum
    case zod.ZodIssueCode.too_small:
      return { message: `${issue.minimum}文字以上で入力してください。` }

  }

  // default error
  return { message: ctx.defaultError };
}

export { globalErrorMap }
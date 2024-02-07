import { z } from "zod";

// Validationの前に実行される
// 値が空文字の場合はnullに変換する
const castToValOrNull = <T extends Parameters<typeof z.preprocess>[1]>(
  schema: T,
) => (
  z.preprocess((val) => {
    if (typeof val === 'string') {
      const trimmedVal = val.trim()
      return trimmedVal.length > 0 ? trimmedVal : null
    }
    return null
  }, schema)
)

export { castToValOrNull }
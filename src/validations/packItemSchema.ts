import { castToValOrNull } from "@/validations/zodUtil";
import { z } from "zod";

export const packItemSchema = z.object({
  name: castToValOrNull(z.string()),
  weight: z.preprocess((v) => Number(v),
    z.number()
      .int()
      .min(0, { message: "0以上の数を指定してください" })
  ).optional(),
  quantity: z.preprocess((v) => Number(v),
    z.number()
      .int()
      .min(1, { message: "1以上の数を指定してください" })
  )
})
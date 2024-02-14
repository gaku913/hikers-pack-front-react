import { castToValOrNull } from "@/validations/zodUtil";
import { z } from "zod";

// Dateスキーマ定義
const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

export const packEditSchema = z.object({
  title: castToValOrNull(z.string()),
  memo: z.string().nullable(),
  startDate: dateSchema,
  endDate: dateSchema,
})
// .refine((args) => {
//   const { endDate, startDate} = args;
//   new Date(endDate) >= new Date(startDate)
// }, {
//   path: ["endDate"],
//   message: "終了日は開始日以降に設定してください。"
// });
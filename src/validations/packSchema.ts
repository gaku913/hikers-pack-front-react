import { castToValOrNull } from "@/validations/zodUtil";
import { z } from "zod";

export const packSchema = z.object({
  title: castToValOrNull(z.string()),
  memo: z.string().trim().nullable(),
  startDate: z.string(),
  endDate: z.string(),
})
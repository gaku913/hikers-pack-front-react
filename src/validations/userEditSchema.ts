import { z } from "zod";
import { castToValOrNull } from "./zodUtil";

export const userEditSchema = z.object({
  name: castToValOrNull(z.string()),
});
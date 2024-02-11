import { castToValOrNull } from "@/validations/zodUtil";
import { z } from "zod";

const loginSchema = z.object({
  email: castToValOrNull(z.string()),
  password: castToValOrNull(z.string()),
});

export { loginSchema }
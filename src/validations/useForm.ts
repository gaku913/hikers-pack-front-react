import { useForm as useRHFForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useForm<T extends z.ZodTypeAny>(
  schema: T,
  defaultValues?: z.infer<T>,
) {

  const {
    control,
    formState: {
      errors,
      isSubmitting,
      isValid
    },
    ...rest
  } = useRHFForm<z.infer<typeof schema>>({
    defaultValues: defaultValues,
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(schema)
  });

  const watchedInput = useWatch({ control })

  // Development Only
  if (import.meta.env.MODE === "development") {

    // フォームのエラー状況
    console.log('errors', errors)
    // フォームの入力値
    console.log('watchedInput', watchedInput)
  }

  return {
    control,
    formState: {
      errors,
      isSubmitting,
      isValid
    },
    ...rest
  };
}
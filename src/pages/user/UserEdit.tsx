import useUser from "@/api/useUser";
import AppFrame from "@/components/AppFrame";
import UserEditForm from "@/components/form/UserEditForm";
import { EditType } from "@/types/user";
import useForm from "@/validations/useForm";
import { userEditSchema } from "@/validations/userEditSchema";

export default function UserEdit() {
  // User Hook
  const { user, update } = useUser();
  // Form State
  const {
    handleSubmit,
    control,
    formState: {
      isSubmitting,
      isValid,
    }
  } = useForm(userEditSchema, {
    name: user?.data.name,
  });

  // フォームの送信
  const onSubmit = (data: EditType) => {
    isValid && update.mutate(data);
  };

  return (
    <AppFrame>
      <h1>プロフィールの編集</h1>
      <UserEditForm
          control={control}
          onSubmit={handleSubmit(onSubmit)}
          leftButton={{
            label: "キャンセル",
            to: "/profile",
          }}
          rightButton={{
            label: "更新",
            type: "submit",
            disabled: isSubmitting || !isValid,
          }}
        />
    </AppFrame>
  )
}
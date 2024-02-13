import useUser from "@/api/useUser";
import AppFrame from "@/components/frame/AppFrame";
import UserEditPWForm from "@/components/form/UserEditPWForm";
import { EditPWType } from "@/api/types/user";
import useForm from "@/validations/useForm";
import { userEditPWSchema } from "@/validations/userEditPWSchema";

export default function UserPassword() {
  // User Hook
  const { updatePW } = useUser();
  // Form State
  const {
    handleSubmit,
    control,
    formState: {
      isSubmitting,
      isValid,
    }
  } = useForm(userEditPWSchema);

  // フォームの送信
  const onSubmit = (data: EditPWType) => {
    isValid && updatePW.mutate(data);
  };
  return (
    <AppFrame>
      <h1>パスワードの更新</h1>
      <UserEditPWForm
          control={control}
          onSubmit={handleSubmit(onSubmit)}
          leftButton={{
            label: "キャンセル",
            to: "/profile/settings",
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
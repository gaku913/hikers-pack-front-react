import useUser from "@/api/useUser";
import AppFrame from "@/components/frame/AppFrame";
import LinkBar from "@/components/LinkBar";

export default function UserShow() {
  const { user } = useUser();
  return (
    <AppFrame>
      <LinkBar
        leftButtons={[
          {
            label: "Topに戻る",
            to: "/",
          },
        ]}
        rightButtons={[
          {
            label: "編集",
            to: "/profile/edit",
          },
        ]}
      />
      <h1>プロフィール</h1>
      <h2>名前</h2>
      <p>{user?.data.name}</p>

    </AppFrame>
  )
}
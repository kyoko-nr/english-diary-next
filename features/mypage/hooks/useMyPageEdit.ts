import {
  currentUserInfoState,
  setUserInfoAction,
  MYPAGE_PATH,
  updateEmailWithPassword,
  auth,
  updateUserName,
} from "@/shared";
import { useAtomValue, useSetAtom } from "jotai";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
const schema = yup
  .object({
    username: yup.string().label("User name").required(),
    email: yup.string().label("Email").required().email(),
    password: yup.string().label("Password").required(),
  })
  .required();

type MyPageEditForm = {
  username: string;
  email: string;
  password: string;
};

export const useMyPageEdit = () => {
  const user = useAtomValue(currentUserInfoState);
  const setUser = useSetAtom(setUserInfoAction);
  const router = useRouter();

  const { control, handleSubmit } = useForm<MyPageEditForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: user?.username ?? "",
      email: user?.email ?? "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    if (!user) {
      return;
    }
    const current = auth.currentUser;
    if (!current) {
      return;
    }

    try {
      // email更新
      if (data.email && data.password && data.email !== user.email) {
        await updateEmailWithPassword(user.email, data.password, data.email);
      }
      // username更新
      if (data.username && data.username !== user.username) {
        await updateUserName(current.uid, data.username);
      }
      setUser({
        username: data.username || user.username,
        email: data.email || user.email,
        uid: user.uid,
      });
      router.push(MYPAGE_PATH);
    } catch (e) {
      // TODO エラーを表示する
    }
  });

  return {
    onSubmit,
    control,
    user,
  };
};

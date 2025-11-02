import { currentUserInfoState } from "@/shared/state/userInfoState";
import { useAtomValue } from "jotai";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  isPasswordChanged: yup.boolean(),
  username: yup.string().label("User name").required(),
  email: yup.string().label("Email").required().email(),
  password: yup.string().label("Password"),
});

interface IFormInput {
  username: string;
  email: string;
  password?: string;
  isPasswordChanged: boolean;
}

export const useMyPageEdit = () => {
  const user = useAtomValue(currentUserInfoState);

  const { control, handleSubmit, setValue, watch } = useForm<IFormInput>({
    // resolver: yupResolver(schema),
    defaultValues: {
      username: user?.username,
      email: user?.email,
      password: "",
    },
  });

  const onSubmit = () => {
    // dispatch(changeLoadingState(true))
    // dispatch(updateUserAccount(data.email, data.username, data.password))
    console.info("mypage save");
  };

  return {
    onSubmit,
    control,
    user,
  };
};

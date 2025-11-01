import { FC, memo } from "react";

import { Alert, Snackbar } from "@mui/material";

const ErrorPopupComponent: FC = () => {
  // TODO
  //   const selector = useSelector((state) => state)
  //   const dispatch = useDispatch()
  //   const errors = getErrors(selector)
  //   const msgs: string[] = errors.errorMsgs
  //   const open = msgs.length > 0

  //   useEffect(() => {
  //     dispatch(changeLoadingState(false))
  //   }, [open])
  const msgs: string[] = [];
  const open = msgs.length > 0;

  if (!open) {
    return null;
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
    >
      <div>
        {msgs.map((msg: string, idx: number) => (
          <Alert severity="error" key={idx} sx={{ marginBottom: "8px" }}>
            {msg}
          </Alert>
        ))}
      </div>
    </Snackbar>
  );
};

export const ErrorPopup = memo(ErrorPopupComponent);

export const SIGUP_LOADING = "SIGUP_LOADING";
export const SIGUP_SUCCESS = "SIGUP_SUCCESS";
export const SIGUP_FAILUER = "SIGUP_FAILUER";

export const signupLoading = () => ({
  type: SIGUP_LOADING,
});
export const signupfsuccess = (payload) => ({
  type: SIGUP_SUCCESS,
  payload,
});

export const signupFailuer = () => ({
  type: SIGUP_FAILUER,
});

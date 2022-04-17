export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILUER = "LOGIN_FAILUER";
export const LoginLoading = () => ({
  type: LOGIN_LOADING,
});
export const Loginfsuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const LoginFailuer = () => ({
  type: LOGIN_FAILUER,
});

export const login =
  ({ username, password }) =>
  (dispatch) => {
    dispatch(LoginLoading());
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(Loginfsuccess({ username, token: res.token }));
        // console.log(isauth, res.token);
      })
      .catch((err) => dispatch(LoginFailuer()));
  };

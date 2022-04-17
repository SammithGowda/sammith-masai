import { LOGIN_FAILUER, LOGIN_LOADING, LOGIN_SUCCESS } from "./Action";

const initistate = {
  loading: false,
  isauth: false,
  token: "",
  error: false,
};

const loginreducer = (store = initistate, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...store,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...store,
        loading: false,
        isauth: true,
        token: payload,
        username: payload.username,
        error: false,
      };

    case LOGIN_FAILUER:
      return {
        ...store,
        loading: false,
        error: true,
        isauth: false,
        token: "",
        username: "",
      };
    default:
      return store;
  }
};

export { loginreducer };

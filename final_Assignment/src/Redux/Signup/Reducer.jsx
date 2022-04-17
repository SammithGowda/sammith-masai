import { SIGUP_LOADING, SIGUP_SUCCESS, SIGUP_FAILUER } from "./Action";

const initistate = {
  loading: false,
  error: false,
};

export const signupreducer = (store = initistate, { type, payload }) => {
  switch (type) {
    case SIGUP_LOADING:
      return {
        ...store,
        loading: true,
      };

    case SIGUP_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
      };

    case SIGUP_FAILUER:
      return {
        ...store,
        loading: false,
        error: true,
      };

    default:
      return store;
  }
};

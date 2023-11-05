import { LOGIN_SUCCESS, LOGOUT, SET_MESSAGE, SET_ROUTE } from "./types";

import AuthService from "../../services/auth.service";

import { statusParser } from "../../util/statusParser";

export const login = (payload) => async (dispatch) => {
  try {
    const result = await AuthService.login(payload);
    const { token, user } = result;
    if (token && user) {
      localStorage.setItem("token", token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user },
      });
    } else {
      dispatch({
        type: SET_MESSAGE,
        payload: {
          message: ["Unknown error"],
          type: "error",
        },
      });
    }
  } catch (err) {
    const type = statusParser(err.status);

    dispatch({
      type: SET_MESSAGE,
      payload: {
        messages: err.data,
        type: type,
      },
    });
  }
};

export const register = (payload) => async (dispatch) => {
  try {
    const result = await AuthService.register(payload);

    if (result.status === 201) {
      return true;
    } else {
      dispatch({
        type: SET_MESSAGE,
        payload: {
          message: ["Unknown error"],
          type: "error",
        },
      });
    }
  } catch (err) {
    const type = statusParser(err.status);

    dispatch({
      type: SET_MESSAGE,
      payload: {
        messages: err.data,
        type: type,
      },
    });
  }
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  localStorage.clear();
  dispatch({
    type: LOGOUT,
  });
  dispatch({
    type: SET_ROUTE,
    payload: {
      name: "auth/login",
      param: null,
    },
  });
};

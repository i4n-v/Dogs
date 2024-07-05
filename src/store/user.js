import { USER_GET } from "../Api";
import createAsyncSlice from "../utils/createAsyncSlice";
import { fetchToken, resetTokenState } from "./token";

const slice = createAsyncSlice({
  name: "user",
  fetchConfig: USER_GET,
});

const { resetState: resetUserState, fetchError: userFetchError } =
  slice.actions;
const fetchUser = slice.asyncAction;

const userLogin = (user) => async (dispatch) => {
  const { payload } = await dispatch(fetchToken(user));

  if (payload instanceof Object && payload.token) {
    window.localStorage.setItem("token", payload.token);
    await dispatch(fetchUser(payload.token));
  }
};

const userLogout = () => async (dispatch) => {
  dispatch(resetUserState());
  dispatch(resetTokenState());
  window.localStorage.removeItem("token");
};

const userAutoLogin = () => async (dispatch, getState) => {
  const { token } = getState();

  if (token.data?.token) {
    const { type } = await dispatch(fetchUser(token.data.token));

    if (type === userFetchError.type) {
      dispatch(userLogout());
    }
  }
};

export { fetchUser, userLogin, userLogout, userAutoLogin };

export default slice.reducer;

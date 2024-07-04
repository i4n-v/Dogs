import { USER_GET } from "../Api";
import createAsyncSlice from "../utils/createAsyncSlice";
import { fetchToken } from "./token";

const slice = createAsyncSlice({
  name: "user",
  fetchConfig: USER_GET,
});

const fetchUser = slice.asyncAction;

const userLogin = (user) => async (dispatch) => {
  const { payload } = await dispatch(fetchToken(user));

  if (payload instanceof Object && payload.token) {
    await dispatch(fetchUser(payload.token));
  }
};

export { fetchUser, userLogin };

export default slice.reducer;

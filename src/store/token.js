import { TOKEN_POST } from "../Api";
import createAsyncSlice from "../utils/createAsyncSlice";

const slice = createAsyncSlice({
  name: "token",
  initialState: {
    data: {
      token: window.localStorage.getItem("token") ?? null,
    },
  },
  fetchConfig: TOKEN_POST,
});

const resetTokenState = slice.actions.resetState;
const fetchToken = slice.asyncAction;

export { fetchToken, resetTokenState };

export default slice.reducer;

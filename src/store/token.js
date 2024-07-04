import { TOKEN_POST } from "../Api";
import createAsyncSlice from "../utils/createAsyncSlice";

const slice = createAsyncSlice({
  name: "token",
  fetchConfig: TOKEN_POST,
});

const fetchToken = slice.asyncAction;

export { fetchToken };

export default slice.reducer;

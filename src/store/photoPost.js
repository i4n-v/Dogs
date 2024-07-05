import { PHOTO_POST } from "../Api";
import createAsyncSlice from "../utils/createAsyncSlice";

const slice = createAsyncSlice({
  name: "photoPost",
  fetchConfig: PHOTO_POST,
});

const photoPost = slice.asyncAction;

export { photoPost };

export default slice.reducer;

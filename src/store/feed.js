import { PHOTOS_GET } from "../Api";
import createAsyncSlice from "../utils/createAsyncSlice";

const slice = createAsyncSlice({
  name: "feed",
  initialState: {
    list: [],
    pages: 1,
    infinite: true,
  },
  reducers: {
    addPhotos(state, action) {
      if (action.payload.length) {
        state.list.push(...action.payload);
      } else {
        state.infinite = false;
      }
    },
    addPage(state) {
      state.pages++;
    },
    resetState(state) {
      state.infinite = true;
      state.pages = 1;
      state.list = [];
      state.data = null;
      state.error = null;
      state.loading = false;
    },
  },
  fetchConfig: PHOTOS_GET,
});

const fetchFeed = slice.asyncAction;
const { addPhotos, addPage, resetState: resetFeedState } = slice.actions;

const loadingNewPhotos =
  ({ total = 6, user }) =>
  async (dispatch, getState) => {
    const { feed } = getState();

    dispatch(addPage());

    const { payload } = await dispatch(
      fetchFeed({ page: feed.pages, total, user })
    );

    dispatch(addPhotos(payload));
  };

export { fetchFeed, addPhotos, addPage, resetFeedState, loadingNewPhotos };

export default slice.reducer;

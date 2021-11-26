import posts from "../data/posts";

const postReducer = function (state = posts, action) {
  switch (action.type) {
    case "REMOVE_POST":
      const post = state.filter((post, index) => index !== action.index);
      return [...post];
    default:
      return state;
  }
};

export default postReducer;

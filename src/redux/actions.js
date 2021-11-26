export function removePost(postIndex) {
  return {
    type: "REMOVE_POST",
    index: postIndex,
  };
}

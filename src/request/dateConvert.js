export function datePost(datePost) {
  const date = new Date(datePost).toString();
  const words = date.split(" ");
  return words[2] + " " + words[1] + " " + words[3] + " at " + words[4];
}
export default datePost;

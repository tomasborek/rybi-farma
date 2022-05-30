const marked = require("marked");
const DOMPurify = require("isomorphic-dompurify");
const parse = require("html-react-parser");

export const pnp = (input: string) => {
  const parsed = marked.parse(input);
  const html = DOMPurify.sanitize(parsed);
  return parse(html);
};

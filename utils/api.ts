const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACESS_TOKEN,
});

export const getRecipes = async () => {};

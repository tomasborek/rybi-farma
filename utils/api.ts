const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.SPACE_ID,
  accessToken: "sGFC5M_ReXi_xmqpKxhoCvpN1EXAxnc-gQCIgig0kCU",
});

export const getRecipes = async (order = "-fields.date") => {
  const recipes = await client.getEntries({
    content_type: "recipe",
    order: order,
  });

  return recipes.items;
};

export const getRecipe = async (slug: string) => {
  const recipe = await client.getEntries({
    content_type: "recipe",
    "fields.slug": slug,
  });

  return recipe.items[0];
};

export const getBlogPosts = async () => {
  const blogPosts = await client.getEntries({
    content_type: "blogPost",
    order: "-fields.date",
  });

  return blogPosts.items;
};

export const getBlogPost = async (slug: string) => {
  const content = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  });
  return content.items[0];
};

export const getPage = async (pageId: string) => {
  const page = await client.getEntries({
    content_type: "page",
    "fields.title": pageId,
  });
  return page.items[0];
};

export const getJobs = async () => {
  const jobs = await client.getEntries({
    content_type: "job",
    order: "fields.title",
  });

  return jobs.items;
};

export const getMainPageImages = async (imageTitle: string) => {
  const image = await client.getAsset("", {
    "fields.title": imageTitle,
  });
  return image.items[0];
};

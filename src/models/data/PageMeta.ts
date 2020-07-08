/** Creates a meta object with all necessary information
 * @returns An object containing the meta properties
 */
function populateMeta(title: string, description: string, image: string) {
  /* eslint-disable */
  const imageURL = require(`@/assets/${image}`);
  const result = {
    title,
    metaTags: [
      {
        name: "description",
        content: description
      },
      {
        property: "og:description",
        content: description
      },
      {
        property: "og:title",
        content: title
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:image",
        content: imageURL
      },
      {
        property: "twitter:card",
        content: "summary"
      },
      {
        property: "twitter:title",
        content: title
      },
      {
        property: "twitter:description",
        content: description
      },
      {
        property: "twitter:image",
        content: imageURL
      }
    ]
  };
  return result;
}

/**
 * All meta tags used by main pages
 */
const PageMeta = {
  /** meta tags for App.vue */
  App: populateMeta(
    "Analytics for Github - trackgit",
    "Supercharge your Github respositories with audience traffic analytics. Get insights like number of views, traffic location, visits over time, and more in just a few clicks.",
    "metaImage.png"
  ),
  /** meta tags for Donate.vue */
  Donate: populateMeta(
    "Make a donation",
    "Your donations help us make your experience on our platform even better!",
    "metaImage.png"
  ),
  /** meta tags for 404.vue */
  Error404: populateMeta(
    "Error 404",
    "The resource you requested couldn't be found. Error code: 404",
    "metaImage.png"
  )
};

export default PageMeta;

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/**/*.css");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

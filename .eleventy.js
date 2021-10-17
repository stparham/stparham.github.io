module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy({"src/static": "."})
  eleventyConfig.addPassthroughCopy("src/**/*.css");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};

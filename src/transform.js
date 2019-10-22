const R = require("ramda");
const blogs = require("../blogs.json");

const transform = (transforms, sourceObject, key) => {
  if (!sourceObject[key] || !Array.isArray(transforms) || !transforms.length) {
    return sourceObject;
  }

  transforms = transforms.map(fn => R.curry(fn)(R.__, sourceObject));

  const performTransformsOn = R.pipe(...transforms);
  sourceObject[key] = performTransformsOn(sourceObject[key]);

  return sourceObject;
};

const bob = transform(R.pick(["url", "title", "content"]), blogs, "blogs");

console.log(bob.title);

const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jbedford/Documents/GitHub/james-blog/.cache/dev-404-page.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/jbedford/Documents/GitHub/james-blog/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jbedford/Documents/GitHub/james-blog/src/pages/index.js")))
}


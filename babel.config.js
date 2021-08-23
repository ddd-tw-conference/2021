const fs = require("fs");
const presetStr = fs.readFileSync(
  require.resolve("@docusaurus/core/lib/babel/preset"),
  { encoding: "utf-8" }
);

module.exports = {
  presets: [
    // eslint-disable-next-line no-eval
    eval(
      presetStr.replace(
        /require\.resolve\('@babel\/preset-react'\)/,
        "[require.resolve('@babel/preset-react'), {runtime: \"automatic\"}]"
      )
    ),
  ],
};

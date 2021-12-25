import "clipboard";
import "prismjs/prism.js";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/components/prism-json";
import "prismjs/components/prism-javascript";
import { themes, basicThemes } from "./utils/themes";
import { languages, basicLanguages } from "./utils/languages";
import { plugins, basicPlugins } from "./utils/plugins";

export const addCssParent = (parentSelector, cssStr) => {
  cssStr = cssStr.replace(
    /:not\(pre\) > code\[class\*="language-"\]/g,
    `${parentSelector} not(pre)code`
  );
  cssStr = cssStr.replace(
    /\.language-css \.token\.string/g,
    `${parentSelector} language-token`
  );
  cssStr = cssStr.replace(
    /\.style \.token\.string/g,
    `${parentSelector} style.string`
  );
  const keyArray = [
    'code\\[class\\*="language"\\]',
    'code\\[class\\*="language-"\\]',
    'pre\\[class\\*="language-"\\]',
    "\\.token\\.",
  ];
  keyArray.forEach((item) => {
    const name = item.replace(/\\/g, "");
    cssStr = cssStr.replace(new RegExp(item, "g"), `${parentSelector} ${name}`);
  });
  cssStr = cssStr.replace(
    new RegExp(`not\\(pre\\)code`, "g"),
    ':not(pre) > code[class*="language-"]'
  );
  cssStr = cssStr.replace(
    new RegExp(`language-token`, "g"),
    ".language-css .token.string"
  );
  cssStr = cssStr.replace(
    new RegExp(`style\\.string`, "g"),
    ".style .token.string"
  );
  return cssStr;
};

// const themesCss = {};
// themes.forEach(({ title, srcName }) => {
//   // themesCss[title] = require(`!!raw-loader!prismjs/themes/${srcName}.css`).default
//   themesCss[title] = import(`prismjs/themes/${srcName}.css?raw`);
// });

// const languagesJs = {};
// basicLanguages.forEach((item) => {
//   //   languagesJs[item] = require(`!!raw-loader!prismjs/components/prism-${
//   //     ["html", "vue", "angular", "xml"].includes(item) ? "markup" : item
//   //   }.min.js`).default;

//   languagesJs[item] = import(
//     `prismjs/components/prism-${
//       ["html", "vue", "angular", "xml"].includes(item) ? "markup" : item
//     }.min.js?raw`
//   );
// });

// const pluginsJs = {};
// // const pluginsCss = []
// basicPlugins.forEach((item) => {
//   if (item === "copy-to-clipboard") {
//     //修改逻辑，让每次修改后都能拿到最新的值
//     // pluginsJs[item] = require(`!!raw-loader!./prism-${item}.js`).default;
//     //pluginsJs[item] = require(`!!raw-loader!prismjs/plugins/${item}/prism-${item}.js`).default
//     pluginsJs[item] = import(`prism-${item}.js?raw`);
//   } else {
//     // pluginsJs[item] =
//     //   require(`!!raw-loader!prismjs/plugins/${item}/prism-${item}.min.js`).default;

//     pluginJs[item] = import(`prismjs/plugins/${item}/prism-${item}.min.js?raw`);
//   }
// });

// const lineNumbersCss =
//   require(`!!raw-loader!prismjs/plugins/line-numbers/prism-line-numbers.css`).default;

// const lineNumbersCss = import(
//   "prismjs/plugins/line-numbers/prism-line-numbers.css?raw"
// );

// const prismJs = require(`!!raw-loader!prismjs/prism.js`).default;

// const prismJs = import("prismjs/prism.js?raw");

// export { themesCss, lineNumbersCss, languagesJs, pluginsJs, prismJs };

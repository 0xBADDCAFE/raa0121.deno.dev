import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";

const site = lume();
site.use(tailwindcss({
  extensions: [".html", ".jsx"],
}));
// site.use(esbuild({
//   extensions: [".jsx"],
// }));
site.use(postcss());
site.use(jsx());
site.copy("static");
site.ignore("README.md");

export default site;

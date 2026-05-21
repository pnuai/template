import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { globSync } from "glob";

const docsPath = "./docs";
const files = globSync(`${docsPath}/*.md`);

const chapters = files.map((file) => {
  const content = fs.readFileSync(file, "utf-8");
  const { data } = matter(content);

  return {
    id: data.id,
    title: data.title,
    description: data.description || "",
    theme: data.theme || "gray",
    link: `/docs/${data.id}`,
    sidebar_position: data.sidebar_position || 999,
  };
});

chapters.sort((a, b) => a.sidebar_position - b.sidebar_position);

const output = `
const chapters =
${JSON.stringify(chapters, null, 2)};

export default chapters;
`;

fs.writeFileSync(path.join("./src/data", "chapters.generated.js"), output);
console.log("chapters.generated.js generated");

import * as markdown from "./lib/markdown";
import * as templates from "./lib/templates";

// POC

// const parsedMarkdown = markdown.parseFrom(__dirname + "/example/markdown");

const parsedMarkdown = markdown.parseFrom(`${__dirname}/example/markdown`);

console.log(parsedMarkdown);

// const parsedTemplates = templates.parseFrom(__dirname + "/example/templates", parsedMarkdown);

// const htmlTree = templates.parseTreeFrom(__dirname + "/example/templates", mdTree);

// templates.write(__dirname + "/public", htmlTree);

// process.exit(0);

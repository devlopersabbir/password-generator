import { simpleGit } from "simple-git";

const filePath = "./index.ts";
const ignore = "./.gitignore";
const mainFile = "./bot.js";

simpleGit()
  .add([filePath, ignore, mainFile])
  .commit("[chore] automate updated", { "--date": "2024-02-25" })
  .push();

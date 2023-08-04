const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

function open(targetPath) {
  const getCommandLine = () => {
    switch (process.platform) {
      case "darwin":
        return "open";
      case "win32":
        return "start";
      case "win64":
        return "start";
      default:
        return "xdg-open";
    }
  };
  exec(getCommandLine() + " " + targetPath);
}

function mkdir(targetPath) {
  if (fs.existsSync(targetPath)) {
    return;
  }
  fs.mkdirSync(targetPath, { recursive: true });
}

function getFiles(targetPath) {
  const folder = path.join(process.cwd(), targetPath);

  mkdir(folder);

  return fs.readdirSync(folder);
}

function getLastFile() {
  const postFolder = path.join(process.cwd(), "_posts");

  mkdir(postFolder);

  const files = fs.readdirSync(postFolder);

  if (files.length === 0) {
    throw new Error("파일이 없습니다.");
  }

  return `${postFolder}/${files.pop()}`;
}

module.exports = {
  open,
  mkdir,
  getFiles,
  getLastFile,
};

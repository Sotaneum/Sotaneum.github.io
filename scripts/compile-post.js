const path = require("path");
const fs = require("fs");
const { mkdir, getFiles } = require("./utils");

function getRenameInfo(markdown, filename) {
  const toPath = `/public/posts/${filename}/`;

  const imgRegex = /!\[.*\]\((.*)\)/g;
  const files = [];

  let prevRes;

  while ((prevRes = imgRegex.exec(markdown))) {
    if (prevRes[1].startsWith(`..${toPath}`)) {
      continue;
    }

    const imgFilename = prevRes[1].split("/").pop();

    const oldFilePath = path.join(process.cwd(), "_posts", prevRes[1]);
    const newFilePath = path.join(process.cwd(), toPath, imgFilename);

    if (!fs.existsSync(oldFilePath)) {
      throw new Error(
        `markdown에는 존재하나, "${prevRes[1]}" 이미지가 누락되었거나 존재하지 않습니다.`,
      );
    }

    if (fs.existsSync(newFilePath)) {
      throw new Error(
        `파일을 이동하려는 곳에 이미 같은 이름의 파일이 존재합니다. 파일을 수정 후 다시 시도바랍니다. "${prevRes[1]}"`,
      );
    }

    files.push({
      oldFilePath,
      newFilePath,
      original: prevRes[1],
      newImagePath: `..${toPath}${imgFilename}`,
    });
  }

  return files;
}

function compilePost(file) {
  if (!file) {
    throw new Error("file 값은 필수입니다.");
  }
  const filePath = path.join(process.cwd(), "_posts", file);
  const filename = file.replace(".md", "");
  const toPath = `/public/posts/${filename}/`;

  const markdown = fs.readFileSync(filePath, { encoding: "utf-8", flag: "r" });
  const imgRegex = /!\[.*\]\((.*)\)/g;

  let prevRes = imgRegex.exec(markdown);
  let newMarkdown = markdown;

  if (prevRes) {
    mkdir(path.join(process.cwd(), toPath));
  }

  const files = getRenameInfo(markdown, filename);
  files.forEach(({ original, oldFilePath, newFilePath, newImagePath }) => {
    fs.renameSync(oldFilePath, newFilePath);
    newMarkdown = newMarkdown.replace(original, newImagePath);
  });

  if (markdown === newMarkdown) {
    return;
  }

  fs.writeFileSync(filePath, newMarkdown, { encoding: "utf-8", flag: "w+" });
}

try {
  const files = getFiles("_posts");
  files.forEach((file) => {
    console.log(`${file}...`);
    compilePost(file);
  });
  console.log("완료");
} catch (err) {
  console.error(err);
}

const fs = require("fs");
const path = require("path");
const { open, mkdir } = require("./utils");

function addZero(num) {
  if (num > 9) {
    return `${num}`;
  }
  return `0${num}`;
}

function createFile(targetPath) {
  fs.writeFileSync(
    targetPath,
    `---
title: 제목을 입력해주세요.
excerpt: 설명을 입력해주세요.
coverImage: 커버 이미지가 있다면 추가해주세요.
tags: 태그를 입력해주세요.
groupTags: 그룹태그가 있다면 입력해주세요.
---
`,
  );
}

function newPost(isOpen = false) {
  const postFolder = path.join(process.cwd(), "_posts");

  mkdir(postFolder);

  const date = new Date();
  const postId = `${date.getFullYear()}${addZero(date.getMonth() + 1)}${addZero(
    date.getDate(),
  )}T${addZero(date.getHours())}${addZero(date.getMinutes())}`;

  const postPath = `${postFolder}/${postId}.md`;

  createFile(postPath);

  if (isOpen) {
    open(postPath);
  }
}

try {
  newPost(process.env.OPEN === "true");
} catch (err) {
  console.error(err);
}

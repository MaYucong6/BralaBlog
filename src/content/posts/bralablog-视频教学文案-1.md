---
title: "BralaBlog教程"
published: 2026-08-21
description: ""
tags: []
category: "随笔"
image: "/uploads/2026/08/bralablog-视频教学文案-1/f5efb6dccbf776732b4640ca7160334d.jpg"
slug: "bralablog-视频教学文案-1"
---

# 从零搭建并部署个人博客：保姆级教程

## 视频定位

- 类型：知识传播、项目教学
- 项目：BralaBlog 个人博客
- 适合人群：编程初学者
- 建议时长：5～8 分钟

## 开场

大家好，今天我们从零开始，把一个本地博客修改成自己的个人网站，并部署到公网。

本期教程不需要复杂的编程基础，只要按照视频一步一步操作，就可以完成属于自己的博客。

本教程会完成五件事：修改博客信息、替换网页图片、添加背景音乐、上传 GitHub，以及使用 Cloudflare 部署。

## 第一部分：准备项目

打开博客项目文件夹，在地址栏输入 `PowerShell`，按回车打开终端。

安装项目依赖：

```powershell
pnpm install
```

如果电脑提示没有 `pnpm`，先执行：

```powershell
npm install -g pnpm
```

依赖安装完成后，启动本地博客：

```powershell
pnpm dev
```

然后打开：

```text
http://localhost:4321
```

如果能看到博客首页，就说明项目启动成功。

## 第二部分：修改博客名称和个人信息

在项目源码中搜索 `KiteBlog`，将它替换成：

```text
BralaBlog
```

然后找到个人资料配置，填写自己的 GitHub 用户名和邮箱：

```text
GitHub 用户名：MaYucong6
GitHub 邮箱：2064312687@qq.com
```

注意，GitHub 用户名不能填写邮箱地址。修改完成后保存并刷新网页。

如果页面没有变化，按 `Ctrl + F5` 强制刷新。

## 第三部分：替换网页图片

将自己的头像、背景图和封面图复制到：

```text
public/assets/images/custom/
```

例如：

```text
logo.png
profile.jpg
hero-1.jpg
cover-heart.jpg
```

再在配置文件中修改图片路径。注意文件名、扩展名和路径必须完全一致。

图片路径一般写成：

```text
/assets/images/custom/profile.jpg
```

如果图片不显示，按 `F12` 打开开发者工具，检查是否出现 `404` 错误。

## 第四部分：添加背景音乐

将 MP3 文件放到：

```text
public/assets/music/
```

例如：

```text
正义之道.mp3
```

打开音乐配置文件：

```text
src/config/musicConfig.ts
```

将本地播放列表设置为：

```text
歌曲名称：正义之道
音乐文件：/assets/music/正义之道.mp3
```

保存后重新启动项目或刷新网页。

需要注意，浏览器通常会限制网页自动播放声音。第一次打开时，可能需要点击页面一下，音乐才会开始播放，这属于浏览器安全策略。

## 第五部分：上传到 GitHub

登录 GitHub，新建一个空仓库，名称填写：

```text
BralaBlog
```

不要自动创建 README，保持仓库为空。

回到项目终端，依次执行：

```powershell
git init
git branch -M main
git add .
git commit -m "Initial BralaBlog site"
git remote add origin https://github.com/MaYucong6/BralaBlog.git
git push -u origin main
```

上传成功后刷新 GitHub 仓库页面，就可以看到项目文件。

## 第六部分：部署到 Cloudflare

登录 Cloudflare，进入 `Workers & Pages`，创建 Worker，并配置自己的域名，例如：

```text
yun117.fun
```

项目使用 GitHub Actions 自动部署。进入 GitHub 仓库：

```text
Settings → Secrets and variables → Actions
```

添加：

```text
CLOUDFLARE_API_TOKEN
```

API Token 只能保存到 GitHub Secrets 中，不能写进代码，也不能发到视频或聊天里。

然后进入：

```text
Actions → Deploy BralaBlog to Cloudflare
```

如果工作流显示绿色对勾，就说明部署成功。

## 第七部分：配置后台登录

如果需要使用博客后台，进入 GitHub：

```text
Settings → Developer settings → OAuth Apps → New OAuth App
```

填写：

```text
Application name：BralaBlog
Homepage URL：https://yun117.fun
Authorization callback URL：https://yun117.fun/api/auth/github/callback
```

创建后保存 `Client ID` 和 `Client Secret`，再把它们添加到 GitHub Actions Secrets：

```text
BRALA_GITHUB_CLIENT_ID
BRALA_GITHUB_CLIENT_SECRET
BRALA_GITHUB_REPO_TOKEN
```

其中 `BRALA_GITHUB_REPO_TOKEN` 需要拥有当前仓库 `Contents: Read and write` 权限。

完成后重新运行部署工作流。

## 第八部分：测试网站

打开：

```text
https://yun117.fun
```

依次检查：

1. 图片是否正常显示。
2. 背景音乐是否可以播放。
3. 手机访问是否正常。
4. 文章页面是否能够打开。
5. GitHub 登录是否能够跳转。
6. 后台文章管理是否能够使用。

如果页面没有更新，按 `Ctrl + F5`，或者使用浏览器无痕窗口重新打开。

## 结尾

到这里，我们就完成了一个完整的个人博客项目。

从本地运行，到修改内容，再到 GitHub 版本管理，最后部署到 Cloudflare 公网访问，整个流程已经完成。

以后只需要修改本地代码，提交并推送到 GitHub，就可以继续更新自己的博客。

如果你正在学习前端开发，这个项目非常适合作为第一个完整作品。

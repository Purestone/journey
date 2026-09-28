# Journey — 个人博客（桌面版）

偏高级感的编辑气质个人博客。主体验是「一张大图 + 一段文字」的连续滚动章节，滚到最底部是「关于我」。

技术栈：React + TypeScript + Vite + Tailwind CSS。部署：Vercel（由你手动操作）。

## 本地预览

在项目里的 `site` 目录执行：

```bash
cd site
npm install
npm run dev
```

终端会给出本地地址（一般是 `http://localhost:5173`）。用浏览器打开即可。

## 构建检查

```bash
cd site
npm run build
```

构建产物在 `site/dist/`。

本地预览构建结果：

```bash
npm run preview
```

## 内容怎么更新

1. 把新照片放到 `public/images/`（或替换现有文件）。
2. 改 `src/content/site.ts` 里的标题、正文、「关于我」和图片路径。
3. 本地 `npm run dev` 看效果。
4. 确认后重新 `npm run build`，再由你手动部署到 Vercel。

本次不做网页里的新增 / 上传 / 编辑 / 发布后台。

## Vercel 手动部署（简短）

1. 登录 [Vercel](https://vercel.com)，选择 Import 本项目或上传 `site` 目录对应仓库。
2. **Root Directory** 设为 `site`（如果仓库根目录是 Burger）。
3. Framework Preset 选 Vite；Build Command：`npm run build`；Output Directory：`dist`。
4. 点击 Deploy。以后内容更新后，再在 Vercel 里手动触发一次部署。

`vercel.json` 已放在 `site/` 内，方便静态路由回退。

## 图稿依据

- 确认采用：`stitch_minimalist_storytelling_blog_wireframe/`（含 `screen.png`、`DESIGN.md`、`code.html`）
- 视觉系统名：Monochrome Editorial（中性单色、Newsreader + Hanken Grotesk）

## 说明

- 当前文案与部分图片为明确占位，不是真实个人资料。
- `AGENTS.md`、`项目记录.md` 为内部协作资料，不作为网站公开页面。

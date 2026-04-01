# 智龄协同平台展示站

基于 `Vue 3 + Vite` 构建的多子页静态展示网站，当前定位为平台成果官网，适合比赛展示、项目介绍和快速对外分享。

## 本地查看

在项目目录 `C:\Users\20719\Desktop\三创\web` 中执行：

```bash
npm install
npm run dev
```

默认访问地址：

```text
http://127.0.0.1:5173
```

## 构建发布

执行：

```bash
npm run build
```

构建完成后，产物目录是：

```text
dist
```

## 当前项目的部署参数

这个项目已经适合直接做纯静态托管：

- 框架：`Vue 3 + Vite`
- 构建命令：`npm run build`
- 产物目录：`dist`
- 路由模式：`Hash` 路由
- 静态部署特点：通常不需要额外配置路由回退

## 推荐上线顺序

如果目标是“低成本、免备案、尽快上线”，推荐顺序如下：

1. `EdgeOne Pages`
2. `腾讯云 COS 中国香港静态网站托管`
3. `Cloudflare Pages`

说明：

- `EdgeOne Pages` 更适合当前“大陆访问者较多，但暂时不备案”的情况
- `COS 中国香港` 更适合想自己掌控静态文件、结构更简单的情况
- `Cloudflare Pages` 仍然能用，但中国大陆访问速度通常不如前两者

## 详细部署文档

完整的双方案教程见：

- [DEPLOY.md](/C:/Users/20719/Desktop/三创/web/DEPLOY.md)

## 一句话建议

如果你现在就想把站发出去：

1. 先执行 `npm run build`
2. 先上 `EdgeOne Pages`
3. 如果后面还想再做一个更可控的备份入口，再补 `COS 中国香港` 版本

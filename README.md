# 维界旅人

维界旅人是一款像素风线性代数交互学习工具。通过三维向量空间探索与游戏化闯关，将抽象数学转化为可观察、可操作的体验，并由助手“小维”陪伴学习。

## 使用与导出
- 在线入口：`index.html`；程序入口：`app.html`。
- 下载 ZIP 后解压，通过任意静态服务器运行；三维引擎仍依赖 CDN 网络，不是完全离线版。
- 无需构建。GitHub Pages 使用 main 分支根目录。

## 嵌入个人网页
```html
<iframe src="https://Patrick-Arnold0712.github.io/weijie-traveler/app.html"
 title="维界旅人" width="100%" height="760" style="border:0" allowfullscreen></iframe>
```
或使用模块：
```js
import { mountWeijie } from './embed.js';
const app = mountWeijie('#project-demo');
// app.destroy();
```
iframe 是隔离嵌入入口，不是数学计算 API。小屏建议用新窗口打开。

## 数据与安全
学习记录存于浏览器 localStorage。AI 服务需要用户自行提供 API Key，会直接请求 DeepSeek；不要把共享密钥写进静态页面。发布包不包含迁移对话、申报资料、用户存档或本机配置。

## 图标
`icon.svg`：暖木色底、金色维度之门、青色三维坐标轴，呼应原程序配色。矢量源文件可直接用于网页。

## 权利说明
本次未擅自添加开源许可证；第三方素材与依赖维持原权利，公开代码不等于允许任意再授权。

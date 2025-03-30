## GameDock - HTML5 游戏平台

GameDock 是一个现代化的 HTML5 游戏平台，提供丰富的在线游戏体验，无需下载，即点即玩。

### 技术栈

- React
- TypeScript
- Tailwind CSS
- Lucide React (图标)

### 本地开发

1. 克隆项目
```bash
git clone <repository-url>
cd gamedock
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 打开浏览器访问 `http://localhost:5173`

### 构建部署

```bash
npm run build
```

构建后的文件将生成在 `dist` 目录下。

### 项目结构

```
src/
  ├── components/     # 可复用组件
  ├── sections/      # 页面主要区块
  ├── types/         # TypeScript 类型定义
  ├── data/          # 静态数据
  └── App.tsx        # 主应用组件
```

### 许可证

版权所有 © 2024 火猴。保留所有权利。
# React Router 和 Redux 练习任务

恭喜您成功搭建了一个基本的 React 项目，并学习了如何使用 React Router 和 Redux 进行路由管理和状态管理！以下是一些练习任务，帮助您巩固所学知识。

## 练习任务 1：扩展产品功能

1. 在 ProductList 页面中添加搜索功能，允许用户通过关键词搜索产品
2. 在 ProductDetail 页面中添加一个评论区，让用户可以查看和添加评论
3. 使用 React Router 的 Navigate 组件实现用户登录后的重定向

**实现思路：**
- 使用 useState 管理搜索关键词
- 根据关键词过滤产品列表
- 为产品添加评论数据，使用 useState 管理评论列表
- 实现添加评论的功能

## 练习任务 2：增强状态管理

1. 创建一个用户认证的 Redux slice，实现登录和登出功能
2. 使用 Redux 管理产品列表数据，而不是在组件内部使用 useState
3. 实现购物车功能，允许用户将产品添加到购物车中

**实现思路：**
- 创建 authSlice.ts，包含 login 和 logout actions
- 创建 productsSlice.ts，管理产品数据和异步加载逻辑
- 创建 cartSlice.ts，包含添加、删除和更新购物车项目的 actions
- 在组件中使用 useAppSelector 和 useAppDispatch 访问和更新状态

## 练习任务 3：实现路由守卫和权限控制

1. 创建一个路由守卫，阻止未登录用户访问受保护的页面
2. 实现一个用户角色系统，根据用户角色显示不同的导航选项
3. 在路由配置中使用 React Router 的 loader 和 action 函数

**实现思路：**
- 创建一个 ProtectedRoute 组件，检查用户登录状态
- 使用 Redux 存储用户角色信息
- 根据用户角色动态生成导航菜单
- 使用 React Router 的 loader 函数在路由加载前获取数据

## 练习任务 4：实现异步状态管理

1. 使用 Redux Toolkit 的 createAsyncThunk 实现异步数据加载
2. 处理异步操作的加载状态、成功状态和失败状态
3. 实现产品数据的分页加载功能

**实现思路：**
- 使用 createAsyncThunk 创建异步 action
- 在 reducer 中处理 pending、fulfilled 和 rejected 状态
- 在组件中显示加载指示器和错误信息
- 实现分页逻辑，每次加载一定数量的产品

## 练习任务 5：优化用户体验

1. 实现路由懒加载，提高应用的初始加载速度
2. 添加页面过渡动画，增强用户体验
3. 实现表单验证功能，提高数据输入的准确性

**实现思路：**
- 使用 React.lazy 和 Suspense 实现组件的懒加载
- 使用 CSS 动画或动画库实现页面过渡效果
- 使用 React Hook Form 或其他表单库实现表单验证

## 如何运行项目

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
```

4. 预览生产版本：
```bash
npm run preview
```

祝您学习愉快！通过完成这些练习任务，您将更深入地理解 React Router 和 Redux 的使用，为构建复杂的 React 应用打下坚实的基础。
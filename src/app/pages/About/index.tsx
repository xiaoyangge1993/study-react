import './index.module.less';

// About 页面展示关于项目的信息和学习目标
function About() {
  return (
    <div className="about">
      <h2>关于这个项目</h2>
      <p>
        这是一个为学习 React Router 和 Redux 状态管理而创建的示例项目。
        如果你是从 Vue 转到 React 的开发者，这个项目可以帮助你快速上手 React 的路由和状态管理方案。
      </p>
      
      <div className="learning-goals">
        <h3>学习目标</h3>
        <ul>
          <li>了解 React Router 的基本用法</li>
          <li>掌握路由参数传递和嵌套路由</li>
          <li>学习 Redux Toolkit 的核心概念和使用方法</li>
          <li>理解状态管理在 React 应用中的重要性</li>
          <li>掌握组件化开发和代码组织的最佳实践</li>
        </ul>
      </div>
      
      <div className="technologies">
        <h3>使用的技术</h3>
        <ul>
          <li>React 19</li>
          <li>TypeScript</li>
          <li>React Router 6</li>
          <li>Redux Toolkit</li>
          <li>Vite</li>
          <li>Less</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
import { Link } from 'react-router-dom';
import './index.module.less';

// Home 页面是应用的首页，展示欢迎信息和主要功能入口
function Home() {
  return (
    <div className="home">
      <h2>欢迎来到 React Router & Redux 学习示例</h2>
      <p className="intro">
        这是一个为学习 React Router 和 Redux 状态管理而创建的示例项目。
        通过这个项目，你可以学习如何在 React 应用中实现路由和状态管理。
      </p>
      
      <div className="features">
        <div className="feature-card">
          <h3>路由功能</h3>
          <p>使用 React Router 实现页面导航、参数传递和嵌套路由</p>
          <Link to="/products" className="feature-link">查看产品列表</Link>
        </div>
        
        <div className="feature-card">
          <h3>状态管理</h3>
          <p>使用 Redux Toolkit 实现全局状态管理、状态更新和数据流</p>
          <Link to="/counter" className="feature-link">体验计数器</Link>
        </div>
        
        <div className="feature-card">
          <h3>组件化开发</h3>
          <p>学习如何组织和管理 React 组件，实现代码复用和可维护性</p>
          <Link to="/about" className="feature-link">了解更多</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
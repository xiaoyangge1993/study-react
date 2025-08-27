import { Outlet, Link, useLocation } from 'react-router-dom';
import './index.module.less';

// Layout 组件是应用的主布局，包含导航栏和页面内容区域
function Layout() {
  const location = useLocation();
  
  // 导航链接配置
  const navLinks = [
    { path: '/', label: '首页' },
    { path: '/about', label: '关于我们' },
    { path: '/contact', label: '联系我们' },
    { path: '/counter', label: '计数器' },
    { path: '/products', label: '产品列表' },
  ];

  return (
    <div className="layout">
      {/* 导航栏 */}
      <header className="header">
        <div className="container">
          <h1 className="logo">React Router & Redux 示例</h1>
          <nav className="nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      
      {/* 页面内容区域 */}
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      
      {/* 页脚 */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 React 学习示例项目</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
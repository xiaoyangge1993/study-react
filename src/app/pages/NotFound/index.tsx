import { Link } from 'react-router-dom';
import './index.module.less';

// NotFound 页面在用户访问不存在的路由时显示
function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - 页面未找到</h2>
      <p>抱歉，您访问的页面不存在或已被移除。</p>
      <Link to="/" className="home-link">
        返回首页
      </Link>
    </div>
  );
}

export default NotFound;
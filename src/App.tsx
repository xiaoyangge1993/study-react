// App.tsx 文件
// 注意：由于我们在 main.tsx 中直接使用了 RouterProvider，
// 这个文件目前不会被直接使用，但保留作为备用入口

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // 如果直接访问 App 组件，重定向到首页
    navigate('/');
  }, [navigate]);
  
  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1>React Router & Redux 学习示例</h1>
      <p>正在重定向到首页...</p>
    </div>
  );
}

export default App;

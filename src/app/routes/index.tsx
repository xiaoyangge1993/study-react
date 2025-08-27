import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Counter from '../pages/Counter';
import NotFound from '../pages/NotFound';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';

// 创建路由配置
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
        index: true,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'counter',
        element: <Counter />,
      },
      {
        path: 'products',
        element: <ProductList />,
      },
      {
        path: 'products/:id',
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
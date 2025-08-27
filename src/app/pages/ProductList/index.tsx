import { Link } from 'react-router-dom';
import { useState } from 'react';
import './index.module.less';

// 定义产品类型
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

// ProductList 页面展示产品列表和过滤功能
function ProductList() {
  // 模拟产品数据
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'React 入门教程',
      price: 99,
      description: '适合初学者的 React 教程，从基础到进阶',
      category: '学习资料',
    },
    {
      id: '2',
      name: 'TypeScript 实战',
      price: 129,
      description: 'TypeScript 在实际项目中的应用和最佳实践',
      category: '学习资料',
    },
    {
      id: '3',
      name: 'Redux 状态管理指南',
      price: 119,
      description: '深入理解 Redux 状态管理，掌握复杂应用的数据流',
      category: '学习资料',
    },
    {
      id: '4',
      name: 'React Router 路由实战',
      price: 109,
      description: '使用 React Router 构建现代化的单页应用',
      category: '学习资料',
    },
    {
      id: '5',
      name: 'React 面试题解析',
      price: 89,
      description: '常见 React 面试题解析和答案，帮助你备战面试',
      category: '学习资料',
    },
  ]);
  
  // 获取所有分类
  const categories = Array.from(new Set(products.map((product) => product.category)));
  
  // 当前选中的分类
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // 过滤后的产品列表
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="product-list">
      <h2>产品列表</h2>
      
      {/* 分类过滤器 */}
      <div className="category-filter">
        <button
          className={`filter-button ${!selectedCategory ? 'active' : ''}`}
          onClick={() => setSelectedCategory(null)}
        >
          全部
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* 产品列表 */}
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="price">¥{product.price}</p>
            <p className="description">{product.description}</p>
            <p className="category">{product.category}</p>
            <Link to={`/products/${product.id}`} className="details-link">
              查看详情
            </Link>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="no-products">
          没有找到匹配的产品
        </div>
      )}
      
      <div className="learning-points">
        <h3>学习要点</h3>
        <ul>
          <li>使用 React Router 的 Link 组件实现页面导航</li>
          <li>通过路由参数传递产品 ID</li>
          <li>学习如何组织和管理页面组件</li>
          <li>使用 useState 管理组件内部状态</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
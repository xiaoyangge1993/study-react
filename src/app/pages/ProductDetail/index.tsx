import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.module.less';

// 定义产品类型
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  details: string;
  features: string[];
}

// ProductDetail 页面展示产品的详细信息
function ProductDetail() {
  // 使用 useParams hook 获取路由参数
  const params = useParams();
  // 获取产品 ID
  const productId = params.id as string;
  // 使用 useNavigate hook 进行导航
  const navigate = useNavigate();
  
  // 产品状态
  const [product, setProduct] = useState<Product | null>(null);
  // 加载状态
  const [isLoading, setIsLoading] = useState(true);
  // 错误状态
  const [error, setError] = useState<string | null>(null);

  // 模拟获取产品详情的副作用
  useEffect(() => {
    // 模拟产品数据库
    const productsDatabase: Product[] = [
      {
        id: '1',
        name: 'React 入门教程',
        price: 99,
        description: '适合初学者的 React 教程，从基础到进阶',
        category: '学习资料',
        details: '本教程适合对前端开发有一定基础，但从未接触过 React 的开发者。通过本教程，你将学习 React 的基本概念、组件化思想、状态管理等核心知识点。教程包含大量实战案例，帮助你快速上手 React 开发。',
        features: [
          'React 基础概念详解',
          '组件化开发实战',
          'Props 和 State 管理',
          '事件处理和表单',
          '条件渲染和列表渲染',
        ],
      },
      {
        id: '2',
        name: 'TypeScript 实战',
        price: 129,
        description: 'TypeScript 在实际项目中的应用和最佳实践',
        category: '学习资料',
        details: '本课程深入讲解 TypeScript 在实际项目中的应用，帮助你掌握类型系统、接口、泛型等高级特性，提高代码质量和开发效率。适合有 JavaScript 基础，想学习 TypeScript 的开发者。',
        features: [
          'TypeScript 基础语法',
          '接口和类型定义',
          '泛型高级应用',
          '类型保护和类型推断',
          '与 React 框架集成',
        ],
      },
      {
        id: '3',
        name: 'Redux 状态管理指南',
        price: 119,
        description: '深入理解 Redux 状态管理，掌握复杂应用的数据流',
        category: '学习资料',
        details: '本指南详细讲解 Redux 的核心概念和工作原理，帮助你掌握如何使用 Redux 管理复杂应用的状态。教程包含大量实战案例，从简单的计数器到复杂的表单处理，全面覆盖 Redux 的应用场景。',
        features: [
          'Redux 核心概念',
          'Actions 和 Reducers',
          'Store 和 Middleware',
          'Redux Toolkit 使用',
          '异步操作处理',
        ],
      },
      {
        id: '4',
        name: 'React Router 路由实战',
        price: 109,
        description: '使用 React Router 构建现代化的单页应用',
        category: '学习资料',
        details: '本课程讲解如何使用 React Router 构建现代化的单页应用，包括路由配置、参数传递、嵌套路由、路由守卫等高级特性。适合已经掌握 React 基础，想学习路由管理的开发者。',
        features: [
          '路由配置和导航',
          '路由参数传递',
          '嵌套路由和布局',
          '路由守卫和权限控制',
          '代码分割和懒加载',
        ],
      },
      {
        id: '5',
        name: 'React 面试题解析',
        price: 89,
        description: '常见 React 面试题解析和答案，帮助你备战面试',
        category: '学习资料',
        details: '本资料收集了 React 面试中常见的问题和答案，包括基础概念、组件化、状态管理、性能优化等方面。通过学习本资料，你可以更好地准备 React 相关的技术面试，提高面试通过率。',
        features: [
          'React 基础面试题',
          '组件化和生命周期',
          '性能优化技巧',
          'React Hooks 详解',
          '实际项目经验分享',
        ],
      },
    ];

    // 模拟网络请求延迟
    setIsLoading(true);
    setTimeout(() => {
      // 查找对应的产品
      const foundProduct = productsDatabase.find((p) => p.id === productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        setError(null);
      } else {
        setProduct(null);
        setError('产品不存在');
      }
      
      setIsLoading(false);
    }, 500);
  }, [productId]);

  // 处理返回列表
  const handleBackToList = () => {
    navigate('/products');
  };

  if (isLoading) {
    return (
      <div className="product-detail">
        <div className="loading">加载中...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-detail">
        <div className="error">
          <p>{error || '产品不存在'}</p>
          <button onClick={handleBackToList}>返回产品列表</button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="back-button-container">
        <button onClick={handleBackToList}>← 返回产品列表</button>
      </div>
      
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">¥{product.price}</p>
        <p className="category">{product.category}</p>
        <p className="description">{product.description}</p>
        
        <div className="details-section">
          <h3>详细介绍</h3>
          <p>{product.details}</p>
        </div>
        
        <div className="features-section">
          <h3>课程特点</h3>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="learning-points">
        <h3>学习要点</h3>
        <ul>
          <li>使用 useParams hook 获取路由参数</li>
          <li>使用 useNavigate hook 进行编程式导航</li>
          <li>处理加载状态和错误状态</li>
          <li>根据路由参数动态显示内容</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetail;
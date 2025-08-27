import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { increment, decrement, incrementByAmount, reset } from '../../store/counterSlice';
import { useState } from 'react';
import './index.module.less';

// Counter 页面展示 Redux 状态管理的用法
function Counter() {
  // 使用自定义 hook 获取 Redux store 中的 counter 状态
  const count = useAppSelector((state) => state.counter.value);
  
  // 使用自定义 hook 获取 dispatch 函数
  const dispatch = useAppDispatch();
  
  // 使用 useState 管理增加数量的输入值
  const [incrementAmount, setIncrementAmount] = useState('10');

  // 处理增加指定数量
  const handleIncrementByAmount = () => {
    // 将字符串转换为数字
    const amount = parseInt(incrementAmount, 10);
    // 检查是否为有效数字
    if (!isNaN(amount)) {
      // 分发 action，更新 Redux store 中的状态
      dispatch(incrementByAmount(amount));
    }
  };

  return (
    <div className="counter">
      <h2>Redux 计数器示例</h2>
      
      <div className="counter-display">
        <p>当前计数：</p>
        <span className="count-value">{count}</span>
      </div>
      
      <div className="counter-controls">
        <button 
          className="control-button" 
          onClick={() => dispatch(decrement())}
        >
          - 减少
        </button>
        
        <button 
          className="control-button reset" 
          onClick={() => dispatch(reset())}
        >
          重置
        </button>
        
        <button 
          className="control-button" 
          onClick={() => dispatch(increment())}
        >
          增加 +
        </button>
      </div>
      
      <div className="counter-advanced">
        <h3>高级操作</h3>
        <div className="advanced-controls">
          <input
            type="number"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            min="1"
            className="amount-input"
          />
          
          <button 
            className="control-button advanced"
            onClick={handleIncrementByAmount}
          >
            增加指定数量
          </button>
        </div>
      </div>
      
      <div className="counter-info">
        <h3>学习要点</h3>
        <ul>
          <li>使用 Redux Toolkit 创建 store 和 slice</li>
          <li>通过 dispatch 分发 action 更新状态</li>
          <li>使用 useSelector 选择 store 中的状态</li>
          <li>自定义 hooks 简化 Redux API 的使用</li>
        </ul>
      </div>
    </div>
  );
}

export default Counter;
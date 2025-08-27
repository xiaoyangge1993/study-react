import { useState } from 'react';
import './index.module.less';

// Contact 页面展示联系信息和一个简单的表单
function Contact() {
  // 使用 useState hook 管理表单状态
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  // 表单提交状态
  const [isSubmitting, setIsSubmitting] = useState(false);
  // 提交成功状态
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // 处理表单输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 处理表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交过程
    setTimeout(() => {
      console.log('表单数据:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // 重置表单
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      // 3秒后重置成功状态
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="contact">
      <h2>联系我们</h2>
      
      <div className="contact-info">
        <h3>联系方式</h3>
        <p>邮箱：example@reactstudy.com</p>
        <p>电话：123-456-7890</p>
        <p>地址：React 学习大厦，前端大道 100 号</p>
      </div>
      
      <div className="contact-form">
        <h3>发送消息</h3>
        
        {submitSuccess && (
          <div className="success-message">
            消息发送成功，感谢您的联系！
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">姓名：</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">邮箱：</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">留言：</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              required
            />
          </div>
          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? '发送中...' : '发送消息'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
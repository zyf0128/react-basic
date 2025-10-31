// react 必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';

//导入项目的根组件
import App from './App';

// 把根组件渲染到 id 为 root 的 DOM 节点上
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);



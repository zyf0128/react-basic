// useState 是 React 中用于在函数组件中添加状态管理的 Hook。
// 目标： 使用useState实现一个简单的计数器功能

// 从react 中导入 useState 函数
import { useState } from 'react';



// 项目的根组件
function App() {

    // 调用useState 来 添加一个 状态变量 
    // useState返回值是一个数组
    // count 是状态变量
    // setCount 是用来修改状态变量的方法
    const [count, setCount] = useState(0);

    const handleClick = () => {
        /* 
        setCount作用：
         1. 修改count 的值
         2. 使用新值来进行UI的渲染
        */
        setCount(count + 1)
    }

    return (
        <div>
            {/* 这里进行事件的绑定 */}
            <button onClick={handleClick}>{count}</button>
        </div>
    );
}

export default App;

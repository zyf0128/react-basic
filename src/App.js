// 组件的定义和使用

// 定义组件
function Button() {
    // 实现业务逻辑
    return <button>Click Me</button>;
}


// 项目的根组件
function App() {

    return (
        <div>
            {/* 自闭合标签 */}
            <Button />

            {/* 双标签 */}
            <Button></Button>
        </div>
    );
}

export default App;

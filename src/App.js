const count = 100;


const isLogin = false

// 项目的根组件
function App() {
    return (

        <div>
            {/* 条件渲染 */}
            {/* 逻辑与 && */}
            {isLogin && <span>Login</span>}

            {/* 三元运算 */}
            {isLogin ? <span>login</span> : <span> not login</span>}
        </div>
    );
}

export default App;

const count = 100;

// 0,1,3
var type = 0

// 实现一个核心的渲染逻辑

function renderContent() {
    {/* 通过if语句来实现复杂的渲染逻辑 */ }
    if (type === 0) {
        return <h1>Type is Zero</h1>;
    } else if (type === 1) {
        return <h2>Type is One</h2>;
    } else {
        return <h3>Type is Other</h3>;
    }
}


// 项目的根组件
function App() {
    return (
        <div>
            {/* 通过调用函数来渲染 */}
            {renderContent()} <br />
        </div>
    );
}

export default App;


{/* 事件的绑定 */ }

// 项目的根组件
function App() {
    //  基础绑定
    const handleClick01 = () => {
        console.log('按钮被点击了1')
    };

    //事件参数e
    const handleClick02 = (e) => {
        console.log('按钮被点击了2', e)
    };

    // 自定义参数name
    const handleClick03 = (name) => {
        console.log('按钮被点击了3', name)
    }

    // 自定义参数name + 事件参数e
    const handleClick04 = (name, e) => {
        console.log('按钮被点击了4', name, e)
    }

    return (
        <div>
            {/* 基础绑定 */}
            <button onClick={handleClick01}> 基础绑定测试 </button>

            {/* 事件参数绑定 */}
            <button onClick={(e) => handleClick02(e)}> 事件参数绑定测试 </button>

            {/* 自定义参数 绑定 */}
            <button onClick={() => handleClick03('jack')}> 自定义参数绑定测试 </button>

            {/* 自定义参数 + 事件参数 绑定 */}
            <button onClick={(e) => handleClick04('mary', e)}> 自定义参数 + 事件参数绑定测试 </button>

        </div>
    );
}

export default App;

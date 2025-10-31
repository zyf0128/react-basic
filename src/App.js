const count = 100;

const list = [
    {id: "01", name: "John", age: 12},
    {id: "02", name: "Jack", age: 32},
    {id: "03", name: "Mary", age: 33}
]

// 项目的根组件
function App() {
    return (
        <div className="App">
            {/*渲染列表*/}
            {/*{map 循环哪个结构 return 哪个结构}*/}
            {/*    注意事项： 加上一个独一无二的key, 字符串或者 number id*/}
            {/*    用来提升 列表的更新性能*/}
            <ul>
                {
                    list.map(
                        item =>
                    <li key={item.id}> {item.name}的年龄是： {item.age} </li>
                    )
                }
            </ul>
        </div>
    );
}

export default App;

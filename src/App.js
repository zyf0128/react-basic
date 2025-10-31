
const count = 100;

function getMessage() {
  return 'this is message from function';
}

// 项目的根组件
function App() {
  return (
    <div className="App">
      this is App
      <br />

      {/*使用引号来传递字符串*/}
      {'this is string'}

      <br />
      {/* 识别JS变量*/}
      {count}
      <br />
      {/*函数调用*/}
      {getMessage()}
      <br />
      {/*方法调用 */}
      {new Date().getDate()}
      <br />
      {/*使用js对象*/}
      {<div style={{ color: 'red' }}> this is dev</div>}
    </div>
  );
}

export default App;

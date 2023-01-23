import Header from "./components/Header/Header";
import './app.scss'
import Todo from "./components/Todos/Todo";
// import Count from "./components/Count/Count";
function App() {
  return (
    <div className="App">
<Header />
{/* <Count /> */}
<Todo />
    </div>
  );
}

export default App;

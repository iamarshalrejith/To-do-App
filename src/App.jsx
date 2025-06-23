import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const todos = [
    { input: "Hello! Add your first todo!", complete: true },
    { input: "Get the groceries", complete: false },
    { input: "learn how to web design", complete: false },
    { input: "Add your todo!", complete: true },
  ];
  return (
    <>
      <Header />
      <Tabs />
      <TodoList />
      <TodoInput />
    </>
  );
}

export default App;

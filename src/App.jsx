import './App.css'
import Counter from './Counter';
import TodoList from './TodoList';
import UserProfile from './UserProfile';

function App() {

  return (
    <>
      <div>
        <h2>Counter Component</h2>
        <Counter />
        <h2>TodoList Component</h2>
        <TodoList />
        <h2>User Profile Component</h2>
        <UserProfile />
      </div>
    </>
  )
}

export default App

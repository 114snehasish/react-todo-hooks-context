import { v4 as uuid } from 'uuid';
import useLocalStorageState from './useLocalStorageState';

export default function useTodoState(initialState = []) {
  const [todos, setTodos] = useLocalStorageState('todos', initialState);

  const addTodo = (newTodoTask) => {
    setTodos([...todos, { id: uuid(), task: newTodoTask, completed: false }]);
  };
  const removeTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };
  return { todos, addTodo, removeTodo, toggleTodo, editTodo };
}

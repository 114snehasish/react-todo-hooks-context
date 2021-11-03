import { Divider, List, Paper } from '@mui/material';
import Todo from './Todo';

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return todos.length > 0 ? (
    <Paper>
      <List>
        {todos.map((todo, idx) => (
          <div key={todo.id}>
            <Todo
              {...todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {idx < todos.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Paper>
  ) : (
    ''
  );
}

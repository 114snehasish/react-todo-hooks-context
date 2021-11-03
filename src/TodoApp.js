import { AppBar, Grid, Paper, Toolbar, Typography } from '@mui/material';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from './hooks/useTodoState';

export default function TodoApp() {
  const starterTodos = [];
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } =
    useTodoState(starterTodos);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">TODOs with React Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

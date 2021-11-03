import { Paper, TextField } from '@mui/material';
import useInputState from './hooks/useInputState';

export default function TodoForm({ addTodo }) {
  const [task, setTask, resetTask] = useInputState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    resetTask();
  };
  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={task}
          onChange={setTask}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

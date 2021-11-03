import { IconButton, ListItemSecondaryAction, TextField } from '@mui/material';
import useInputState from './hooks/useInputState';
import { Check, Undo } from '@mui/icons-material';

export default function TodoEditForm({ task, handleEdit, toggleEditMode }) {
  const [todoTask, setTodoTask, reset] = useInputState(task);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(todoTask);
    reset();
  };
  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: '.8rem', width: '50%' }}>
      <TextField
        margin="normal"
        label="Edit TODO"
        value={todoTask}
        onChange={setTodoTask}
        fullWidth
        autoFocus
        size="small"
      />
      <ListItemSecondaryAction>
        <IconButton type="submit" aria-label={'Save'}>
          <Check />
        </IconButton>
        <IconButton aria-label={'Undo'} onClick={toggleEditMode}>
          <Undo />
        </IconButton>
      </ListItemSecondaryAction>
    </form>
  );
}

import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import useToggleState from './hooks/useToggle';
import TodoEditForm from './TodoEditForm';

export default function Todo({
  id,
  task,
  completed,
  removeTodo,
  toggleTodo,
  editTodo,
}) {
  const handleRemove = () => removeTodo(id);
  const handleToggle = () => toggleTodo(id);
  const [editMode, toggleEditMode] = useToggleState();
  const handleEdit = (newTodoTask) => {
    editTodo(id, newTodoTask);
    toggleEditMode();
  };
  return (
    <ListItem style={{ height: '64px' }}>
      {editMode ? (
        <>
          <TodoEditForm
            task={task}
            handleEdit={handleEdit}
            toggleEditMode={toggleEditMode}
          />
        </>
      ) : (
        <>
          <Checkbox checked={completed} tabIndex={-1} onClick={handleToggle} />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label={'Edit'} onClick={toggleEditMode}>
              <Edit />
            </IconButton>
            <IconButton aria-label={'Delete'} onClick={handleRemove}>
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

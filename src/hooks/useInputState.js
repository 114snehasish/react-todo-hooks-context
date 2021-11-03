import { useState } from 'react';

export default function useInputState(initialState = '') {
  const [state, setState] = useState(initialState);
  const handleChange = (e) => setState(e.target.value);
  const reset = () => setState('');
  return [state, handleChange, reset];
}

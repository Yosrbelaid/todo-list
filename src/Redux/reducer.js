import { ADD_TASK, REMOVE_TASK, EDIT_TASK, FILTER } from './actionTypes';

const initialData = {
  tasks: [],
  filter: false,
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case REMOVE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        ),
      };

    case FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

export default reducer;


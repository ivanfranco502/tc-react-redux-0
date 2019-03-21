import {
  SET_LOADING,
  ADD_TASK,
  SET_TASKS,
  NEW_NAME_CHANGE
} from '../constants/actionTypes';

const INITIAL_STATE = {
  tasks: [],
  newName: '',
  isLoading: false
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { title: action.taskName }],
        newName: ''
      };
    case SET_TASKS:
      return {
        ...state,
        isLoading: false, 
        tasks: [...action.tasks].splice(0, 5)
      };
    case NEW_NAME_CHANGE:
      return {
        ...state,
        newName: action.newName
      };
    default:
      return state;
  }
};

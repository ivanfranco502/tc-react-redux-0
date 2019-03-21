import {
  SET_LOADING,
  ADD_TASK,
  SET_TASKS,
  NEW_NAME_CHANGE,
} from '../constants/actionTypes';


export const setLoading = () => ({
  type: SET_LOADING,
});


export const addTask = taskName => ({
  type: ADD_TASK,
  taskName
});


export const setTasks = tasks => ({
  type: SET_TASKS,
  tasks
});


export const changeNewName = newName => ({
  type: NEW_NAME_CHANGE,
  newName
});

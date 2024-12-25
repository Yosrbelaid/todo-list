import { ADD_TASK } from "./actionTypes";
import { FILTER } from "./actionTypes";
import { EDIT_TASK } from "./actionTypes";
import { REMOVE_TASK } from "./actionTypes";

export const removeTask = (id) => {
  return { type: REMOVE_TASK, payload: id };
};

export const addTask = (newtask) => { 
    return {type: ADD_TASK, payload: newtask }
};
export const filtertask =(filter) =>{
    return {type: FILTER,payload: filter }
};

export const editTask = (task) => {
  return { type: EDIT_TASK, payload: task }; 
};

import {createReducer, on} from "@ngrx/store";
import {Project} from "../project";
import {loadFailed} from "./github.actions";
import {loadSuccess} from "./github.actions";

export const initialState: Project[] = [];


export const loadProjectsReducer = createReducer(
  initialState,
  on(loadSuccess, (state, { projects }) => [...projects]), // Correct way to update an array
);

// export const loadProjectsReducer = createReducer(
//   initialState,
//   on(loadSuccess, (state, {projects}) => ({...state, projects})),
// );

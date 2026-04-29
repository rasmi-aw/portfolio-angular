import {createAction, props} from "@ngrx/store";
import {Project} from "../project";


export const load = createAction("[Github] load projects",
  props<{ url: string }>());
export const loadSuccess = createAction("[Github] load projects success",
  props<{ projects: Project[] }>());
export const loadFailed = createAction("[Github] load projects failed",
  props<{ msg: string }>());

import {ProjectSTATE} from "./project-state";

export interface Project {
  id: number
  name: string
  date: string
  description: string
  img: string,
  featured: boolean,
  state: ProjectSTATE
}

import {Component} from '@angular/core';
import {Project} from "../project";
import {ProjectSTATE} from "../project-state";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {


  public getProjects(): Project[] {
    return [
      {
        state: ProjectSTATE.FINISHED,
        id: 1,
        featured: true,
        name: "Project name",
        date: "October 10th, 2023",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
      },
      {
        state: ProjectSTATE.ON_GOING,
        id: 2,
        featured: true,
        name: "Project name",
        date: "October 10th, 2023",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
      },
      {
        state: ProjectSTATE.NOT_STARTED,
        id: 3,
        featured: true,
        name: "Project name",
        date: "October 10th, 2023",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
      }
    ]
  }

  trackByData(index: number, projects: any): number {
    return projects.id;
  }

  protected readonly ProjectSTATE = ProjectSTATE;
}


import {Component, Input} from '@angular/core';
import {Project} from "../project";
import {ProjectSTATE} from "../project-state";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @Input() projects: any

  trackByData(index: number, projects: any): number {
    return projects.id;
  }

  protected readonly ProjectSTATE = ProjectSTATE;
}


import {Component} from '@angular/core';
import {Project} from "../project";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {


  getProjects(): Project[] {
    return [
      {
        name: "Project name",
        date: "",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "http"
      }
    ]
  }
}


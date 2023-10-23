import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../project";
import {ProjectSTATE} from "../project-state";
import {ajax} from "rxjs/internal/ajax/ajax";
import {filter, from, fromEvent} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() projects: any

  trackByData(index: number, projects: any): number {
    return projects.id;
  }

  ngOnInit() {
  }


  protected readonly ProjectSTATE = ProjectSTATE;
}


import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../project";
import {ProjectSTATE} from "../project-state";
import {ajax} from "rxjs/internal/ajax/ajax";
import {filter, from, fromEvent} from "rxjs";
import {GithubApiServiceService} from "../github-api-service.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [GithubApiServiceService]
})
export class MainComponent implements OnInit {
  @Input() projects: any
  @Input() linkGithub: any
  gitData: any

  constructor(private gitApi: GithubApiServiceService) {
  }

  trackByData(index: number, projects: any): number {
    return projects.id;
  }

  ngOnInit() {
    this.gitApi.getProjects(this.linkGithub, (resp: any) => {
      this.gitData = resp
    });
  }


  protected readonly ProjectSTATE = ProjectSTATE;
}


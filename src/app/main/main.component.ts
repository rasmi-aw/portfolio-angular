import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../project";
import {ProjectSTATE} from "../project-state";
import {ajax} from "rxjs/internal/ajax/ajax";
import {filter, from, fromEvent} from "rxjs";
import {GithubApiServiceService} from "../github-api-service.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() projects: any
  @Input() linkGithub: any
  gitProjects: any
  gitData: any

  constructor(private gitApi: GithubApiServiceService) {
  }

  trackByData(index: number, projects: any): number {
    return projects.id;
  }

  ngOnInit() {
    this.gitApi.getInfo(this.linkGithub, (resp: any) => {
      this.gitData = resp
    }, (err: HttpErrorResponse) => {
      alert(err.message)
    });
    //
    this.gitApi.getProjects(this.linkGithub.replace(/users/gi,"/"), (resp: any) => {
      this.gitProjects = resp
    }, (err: HttpErrorResponse) => {
      alert(err.message)
    });
  }


  protected readonly ProjectSTATE = ProjectSTATE;
}


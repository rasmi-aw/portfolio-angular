import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../project";
import {ProjectSTATE} from "../project-state";
import {ajax} from "rxjs/internal/ajax/ajax";
import {filter, from, fromEvent} from "rxjs";
import {GithubApiServiceService} from "../github-api-service.service";
import {HttpErrorResponse} from "@angular/common/http";
import {load, loadSuccess} from "../state/github.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() projects: any;
  @Input() linkGithub: any;
  gitData: any
  gitProjects$ = this.store.select((state: any) => state.projects);


  constructor(private gitApi: GithubApiServiceService, private store: Store) {
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

    let url = "https://api.github.com/users/"
      + new URL(this.linkGithub).pathname.replace(".git", "").replace("/", "").trim()+ "/repos";
    this.store.dispatch(load({url: url}))
  }


  protected readonly ProjectSTATE = ProjectSTATE;
  protected readonly alert = alert;
  protected readonly JSON = JSON;
}


import {Injectable} from '@angular/core';
import {ajax} from "rxjs/internal/ajax/ajax";

@Injectable({
  providedIn: null
})
export class GithubApiServiceService {

  constructor() {
  }

  public getProjects(url: string, callback: any): any {
    if (!url) {
      return null
    }
    //
    let uname = new URL(url).pathname.replace(".git", "").replace("/", "")
    ajax({
      url: "https://api.github.com/users/pathname".replace("pathname", uname),
      async: true,
    }).subscribe(callback)
  }
}

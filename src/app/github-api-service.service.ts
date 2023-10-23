import {Injectable} from '@angular/core';
import {ajax} from "rxjs/internal/ajax/ajax";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GithubApiServiceService {

  constructor(private http: HttpClient) {
  }

  public getProjects(url: string, callback: any): any {
    if (!url) {
      return null
    }
    //

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    //
    const ur = "https://api.github.com/users/"
      + new URL(url).pathname.replace(".git", "").replace("/", "").trim();
    this
      .http
      .get(ur, httpOptions)
      .subscribe(callback)
  }
}

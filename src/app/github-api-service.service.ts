import {Injectable} from '@angular/core';
import {ajax} from "rxjs/internal/ajax/ajax";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, retry} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GithubApiServiceService {

  constructor(private http: HttpClient) {
  }

  public getInfo(url: string, success: any, error: any): any {
    const ur = "https://api.github.com/users/"
      + new URL(url).pathname.replace(".git", "").replace("/", "").trim();
    return this.httpReq(ur, success, error);
  }


  public getProjects(url: string, success: any, error: any): any {
    const ur = "https://api.github.com/users/"
      + new URL(url).pathname.replace(".git", "").replace("/", "").trim()
      + "/repos";
    return this.httpReq(ur, success, error);
  }

  private httpReq(url: string, success: any, error: any): any {
    if (!url) {
      return null
    }
    //
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    //
    this
      .http
      .get(url, httpOptions)
      .pipe(retry(1), catchError(error))
      .subscribe(success)
  }

}

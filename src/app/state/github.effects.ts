import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HttpClient} from "@angular/common/http";
import {load, loadFailed, loadSuccess} from "./github.actions";
import {catchError, map, mergeMap, of, retry} from "rxjs";
import {Project} from "../project";

@Injectable()
export class GithubEffects {

  load$ = createEffect(() => this.actions$.pipe(
    ofType(load),
    mergeMap((action) =>
      this.http
        .get<Project[]>(action.url, {headers: {'Content-Type': 'application/json'}})
        .pipe(retry(1),
          map((projects) => loadSuccess({projects})),
          catchError((error) => of(loadFailed({msg: error.message}))))
    )));

  constructor(private actions$: Actions, private http: HttpClient) {

  }
}

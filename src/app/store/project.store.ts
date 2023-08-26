import { Injectable, inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, catchError, pipe, switchMap, tap } from 'rxjs';
import { DataService } from '../shared/data-access/data.service';
import { Project } from '../shared/utils/types';

interface ProjectState {
  projects: Project[] | null;
  error: string | null;
}

@Injectable()
export class ProjectStore extends ComponentStore<ProjectState> {
  dataService = inject(DataService);
  readonly projects$ = this.select((state) => state.projects);
  readonly error$ = this.select((state) => state.error);

  loadProjects = this.effect<void>(
    pipe(
      switchMap(() =>
        this.dataService.getProjects().pipe(
          tap({
            next: (projects) => this.patchState({ projects }),
            error: (error) => this.patchState({ error:error.error.message }),
          })
        )
      ),
      catchError(() => EMPTY)
    )
  );


  constructor(){
    super({
        projects: null,
        error: null
    })
  }
}

import { Component, inject } from '@angular/core';
import { DataService } from '../shared/data-access/data.service';
import { Observable, tap } from "rxjs";
import { Project } from "../shared/utils/types";
import { CommonModule } from "@angular/common";





@Component({
  selector: 'app-projects',
  imports:[CommonModule],
  standalone: true,
  templateUrl: './projects.view.html',
})
export default class ProjectsComponent {

  dataService = inject(DataService);
  projects$: Observable<Project[]>;
  loading: boolean = false;

  constructor(){
    this.loading = true;
    this.projects$ = this.dataService.getPosts().pipe(tap(()=> this.loading = false));
  }


  
}

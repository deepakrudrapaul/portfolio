import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProjectStore } from "../../store/project.store";
import { ProjectCardComponent } from "../../components/project-card/project-card.component";


@Component({
  selector: 'app-projects',
  imports:[CommonModule, ProjectCardComponent],
  standalone: true,
  templateUrl: './index.component.html',
  providers:[ProjectStore]
})
export default class ProjectsComponent implements OnInit {
 
  isLoading: boolean = false;
  projectStore = inject(ProjectStore);
  projects$ = this.projectStore.projects$;
  error$ = this.projectStore.error$;

  ngOnInit(): void {
    this.projectStore.loadProjects();
  }
  
}

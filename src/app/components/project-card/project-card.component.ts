import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from "src/app/shared/utils/types";
import { Observable } from "rxjs";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  @Input()
  projects!: Project[] | null;

  @Input()
  error!: string | null;
}

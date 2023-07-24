import { Injectable, inject } from '@angular/core';
import { AppConstants } from "../utils/app-constants";
import { HttpClient } from "@angular/common/http";
import { Project } from "../utils/types";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl: string =  import.meta.env.BASE_URL + "api/v1/projects";
  private http = inject(HttpClient);
  


  constructor() {
    
   }


   getPosts(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl);
   }


}

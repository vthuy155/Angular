import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from 'src/types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {  }
  getCategory(): Observable <Category[]>{
    return this.http.get<Category[]>(environment.category)
  }
}

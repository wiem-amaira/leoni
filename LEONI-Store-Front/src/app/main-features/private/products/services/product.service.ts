import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost/LEONI-Store-Back/products/controllers/products-api.php';
  private apiUrl1 = 'http://localhost/user';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getallData():Observable<any>{
    return this.http.delete(this.apiUrl1);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Band } from './band';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  private apiUrl = environment.dataUrl;

  constructor(private http: HttpClient) { }

  getBands(): Observable<Band[]> {
    return this.http.get<Band[]>(this.apiUrl);
  }
}

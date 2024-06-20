import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  private apiUrl = 'https://any-api.com:8443/http://data.nba.net/10s/prod/v1/2020/players.json';
  private apiPostUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
   return this.http.get<any>(this.apiUrl);
  }
   getTeams(): Observable<any>{
    return this.http.get<any>('${this.apiUrl}/teams');
   }

   addPlayer(player: any): Observable<any>{
 return this.http.post<any>(this.apiPostUrl, player);
   }
}

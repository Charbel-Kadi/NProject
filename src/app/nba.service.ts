import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  private apiUrl = 'https://stats.nba.com/stats/'


  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
   return this.http.get<any>('${this.apiUrl}/players');
  }
   getTeams(): Observable<any>{
    return this.http.get<any>('${this.apiUrl}/teams');
   }

   addPlayer(player: any): Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>('${this.apiUrl}/players', player, {headers});
   }
}
